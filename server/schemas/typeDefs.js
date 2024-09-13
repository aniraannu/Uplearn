const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
}
 
type Course {
    id: ID!
    title: String!
    description: String!
    lessons: [Lesson!]!
    users: [User!]!
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
    createUser(name: String!, email: String!, password: String!): User
    createLesson(title: String!, content: String!, courseId: ID!): Lesson
    enrollCourse(courseId: ID!, userId: ID!): Course
    enrollUser(courseId: ID!, userId: ID!): User
}
`;
module.exports = typeDefs;
