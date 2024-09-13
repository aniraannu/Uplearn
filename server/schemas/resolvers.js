const { User, Course, Lesson } = require("../models");

const resolvers = {
  Query: {
    //Fetch all courses
    courses: async () => {
      try {
        return await Course.find()
          .populate("instructor")
          .populate("lessons")
          .populate("students");
      } catch (err) {
        throw new Error("Error fetching the courses");
      }
    },
    //Fetch a single course by id
    course: async (_, { id }) => {
      try {
        return await Course.findById(id)
          .populate("instructor")
          .populate("lessons")
          .populate("students");
      } catch (err) {
        throw new Error("Error fetching the course");
      }
    },
    //Fetch all users
    users: async () => {
      try {
        return await User.find();
      } catch (err) {
        throw new Error("Error fetching the users");
      }
    },
    //Fetch a single user by id
    user: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error("Error fetching the user");
      }
    },
    //Fetch all lessons for a specific course
    lessons: async (_, { courseId }) => {
      try {
        return await Lesson.find({ course: courseId });
      } catch (err) {
        throw new Error("Error fetching the lessons");
      }
    },
  },

    Mutation: {
      //Create a new user
      createUser: async (_, { name, email, password, role }) => {
        const user = new User({ name, email, password, role });
        try {
          return await user.save();
        } catch (err) {
          throw new Error("Error creating the user");
        }
      },
      //Create a new course
      createCourse: async (_, { title, description, instructorId }) => {
        const course = new Course({
          title,
          description,
          instructor: instructorId,
          lessons: [],
          students: [],
        });
        try {
          return await course.save();
        } catch (err) {
          throw new Error("Error creating the course");
        }
      },
      //Create a new lesson for a course
      createLesson: async (_, { title, content, courseId }) => {
        const lesson = new Lesson({ title, content, course: courseId });
        try {
          const savedLesson = await lesson.save();
          await Course.findByIdAndUpdate(courseId, {
            $push: { lessons: savedLesson._id },
          });
          return savedLesson;
        } catch (err) {
          throw new Error("Error creating the lesson");
        }
      },
      //Enroll a student in a course
      enrollStudent: async (_, { courseId, studentId }) => {
        try {
          const course = await Course.findByIdAndUpdate(
            courseId,
            { $push: { students: studentId } },
            { new: true }
          )
            .populate("instructor")
            .populate("lessons")
            .populate("students");
          return course;
        } catch (err) {
          throw new Error("Error enrolling the course");
        }
      },
    },
  };

module.exports = resolvers;
