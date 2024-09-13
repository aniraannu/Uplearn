const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    role: String! # "student" or "instructor"
}
 #Define Course type
    type Course {
        id: ID!
        title: String!
        description: String!
        instructor: User!
        lessons: [Lesson!]!
        students: [User!]!
        createdAt: String!
        updatedAt: String!
    }
    type Lesson {
        id: ID!
        title: String!
        content: String!
        course: Course!
        createdAt: String!
        updatedAt: String!
    }
    type Query {

        #Fetch all users
        users: [User!]!

        #Fetch a single user by ID
        user(id: ID!): User

        #Fetch all courses
        courses: [Course!]!

        #Fetch a single course by ID
        course(id: ID!): Course

        #Fetch all lessons for a course
        lessons(courseId: ID!): [Lesson!]!
    }
    
    #Define mutations for creating users, courses, and lessons and updating data
    type Mutation {
        #Create a new user
        createUser(name: String!, email: String!, password: String!, role: String!): User
        #Create a new course
        createCourse(title: String!, description: String!, instructorId: ID!): Course
        #Create a new lesson for a course
        createLesson(title: String!, content: String!, courseId: ID!): Lesson
        #Enroll a student in a course
        enrollCourse(courseId: ID!, studentId: ID!): Course
    }
`;
module.exports = typeDefs;
