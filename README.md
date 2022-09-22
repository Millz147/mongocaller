# mongocaller
Mongocaller is a module that makes it easy for mongoDB users to implement some CRUD methods

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install mongocaller.

```bash
npm install mongocaller
```

## Usage

```javascript
import { AddTo_DB, IsExist_DB, FindAll_DB, FindAllDesc_DB, UpdateTo_DB, DeleteFrom_DB, Aggregate_DB }  from 'mongocaller'


# returns 'Add the new informations to the DB model'
AddToDB(modelname, { informations })

# returns 'Check if filters exist in the DB model'
IsExist_DB(modelname, { filter })

# returns 'Find all data that exist in the DB model'
FindAll_DB(modelname, filter)

# returns 'Find all data that exist in the DB model in Descending order'
FindAllDesc_DB(modelname, filter)

# returns 'Update informations on the DB model'
UpdateTo_DB(modelname, filter, updates)

# returns 'Update informations on the DB model'
UpdateTo_DB(modelname, filter, updates)

# returns 'Delete informations from the DB model'
 DeleteFrom_DB(modelname, filter)

# returns 'Perform aggregate searching on the DB model, pass in the the match (if no match pass in {}), group and projection parameters'
Aggregate_DB(modelname, match, group, project)

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Creator
This modules was created by [Ibrahim Habib](https://www.linkedin.com/in/habib-ibrahim-30a9a070/), Link up with me if you have any issue while using the modules, Thanks.

## License
[MIT](https://choosealicense.com/licenses/mit/)