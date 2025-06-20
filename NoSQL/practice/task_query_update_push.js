db.task.updateOne(
  { email: "amccurry3@cnet.com" },
  {
    $push: {
      skills: {
        name: "Node.js",
        level: "Intermediate",
        isLearning: false
      }
    }
  }
)

// db.task.updateOne(
//   { email: "amccurry3@cnet.com" },
//   {
//     $set: {
//       skills: [
//         { name: "JavaScript", level: "Intermediate", isLearning: true },
//         { name: "Python", level: "Beginner", isLearning: true },
//         { name: "TypeScript", level: "Learning", isLearning: true }
//       ]
//     }
//   }
// )
