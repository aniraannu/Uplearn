const { User, Course, Lesson } = require("../models");

const resolvers = {
  Query: {
    //Fetch all courses
    courses: async () => {
      try {
        return await Course.find()
          .populate("lessons")
          .populate("user");
      } catch (err) {
        throw new Error("Error fetching the courses");
      }
    },
    //Fetch a single course by id
    course: async (_, { id }) => {
      try {
        return await Course.findById(id)
          .populate("lessons")
          .populate("user");
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
    createUser: async (_, { name, email, password }) => {
      const user = new User({ name, email, password });
      try {
        return await user.save();
      } catch (err) {
        throw new Error("Error creating the user");
      }
    },
    //Enroll a user in a course
    enrollUser: async (_, { courseId, userId }) => {
      try {
        const course = await Course.findByIdAndUpdate(
          courseId,
          { $push: { users: userId } },
          { new: true }
        )
          .populate("lessons")
          .populate("user");
        return course;
      } catch (err) {
        throw new Error("Error enrolling the course");
      }
    },
  },
};

module.exports = resolvers;
