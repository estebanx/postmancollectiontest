const { run } = require("newman");

// Get parameters from the command line
const args = process.argv.slice(2);

// // Validate that the necessary parameters were passed
// if (args.length < 3) {
//   console.error(
//     "Usage: node run-collection.js <collection> <environment> <globals>"
//   );
//   process.exit(1);
// }

// Assign parameters to variables
const collection = args[0];
// const environment = args[1];
// const globals = args[2];

// Configuration options for Newman
const options = {
  collection: require(collection),
  // environment: require(environment),
  // globals: require(globals),
  reporters: ["teamcity", "cli", "html"],
  reporter: {
    html: {
      export: "./html-report.html", // Optional: Path to save the HTML report
    },
  },
};

// Execute Newman with the provided parameters
run(options, function (err, summary) {
  if (err) {
    console.error("Error executing the collection:", err);
    process.exit(1);
  }
  console.log("Collection run complete!");
  // Optional: Add any additional processing of the summary object here
});
