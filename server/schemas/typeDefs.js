const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    role: String!
}
 
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

        users: [User!]!
        user(id: ID!): User
        courses: [Course!]!
        course(id: ID!): Course
        lessons(courseId: ID!): [Lesson!]!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!, role: String!): User
       
        createCourse(title: String!, description: String!, instructorId: ID!): Course
        
        createLesson(title: String!, content: String!, courseId: ID!): Lesson
        enrollCourse(courseId: ID!, studentId: ID!): Course
        enrollStudent(courseId: ID!, studentId: ID!): User
    }
`;
module.exports = typeDefs;
