# MongoDB Aggregation Pipeline Error Handling: Empty Input to $group Stage

This repository demonstrates a common error in MongoDB aggregation pipelines: encountering an empty input to the `$group` stage.  When a `$match` stage fails to find any matching documents, the subsequent `$group` stage will throw an error because it doesn't have any data to process.

## The Problem

The `bug.js` file contains an aggregation pipeline that attempts to group documents based on a regular expression match. If no documents match the regular expression, the aggregation pipeline fails.

## The Solution

The `bugSolution.js` file shows a correct way to handle the error using the `$facet` stage.  `$facet` allows you to run multiple aggregation pipelines in parallel, each potentially producing zero, one or many results, without stopping the overall pipeline.

## How to Reproduce the Error

1.  Clone this repository.
2.  Start a MongoDB instance.
3.  Create a collection with some sample data. If no matching data exists this will be more effective.
4.  Run `bug.js`.  Observe that it throws an error if no documents match the regex.
5.  Run `bugSolution.js`.  Observe that it correctly handles cases where no documents match and returns an empty array in the results.