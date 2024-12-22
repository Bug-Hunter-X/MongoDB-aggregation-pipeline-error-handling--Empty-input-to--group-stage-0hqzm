```javascript
const pipeline = [
  {
    $facet: {
      matchedDocuments: [
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
      ],
      unmatchedDocuments: [
        {
          $match: {
            fieldName: { $regex: /pattern/i }
          }
        }
      ]
    }
  }
];

db.collection.aggregate(pipeline);
```