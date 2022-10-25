
# Restful table

| # | Action | URL | HTTP Verb | JSX view filename | mongoose method|
|---|--------|-----|-----------|-------------------|----------------|
| 1 | Index  | /logs/| GET | Index.jsx|Log.find()|
|2| Show|/logs/:id | GET|Show.jsx | Log.findById()|
|3| New | /logs/new | NEW | New.jsx | none|
|4|Create| /logs/ | POST | none | Log.create(req.body)|
|5|Edit | /logs/:id/edit| GET| Edit.jsx | Log.findByID()|
|6|Update|/logs/:id | PUT | none |Log.findByIdAndUpdate(req.params.id, req.body)|
|7| Destroy | /logs/:id | DELETE | none | findByIdAndDelete(req.params.id)|