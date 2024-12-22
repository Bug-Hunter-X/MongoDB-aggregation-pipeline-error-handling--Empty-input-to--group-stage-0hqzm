```javascript
const pipeline = [
  {
    $match: {
      fieldName: { $regex: /pattern/i }
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
];

// This will error if there are no documents matching the regex
db.collection.aggregate(pipeline);
```