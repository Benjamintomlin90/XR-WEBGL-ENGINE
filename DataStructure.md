# Alter Learning Data Lake
## Data Base Architecture

## Database schemas and functions 

### Created: Web Site DB (Institutions, Students, Teachers, and Parents)

### Tobe created: (a) Web Site DB (Promotional contents, Profiles, Schedule, and Membership) and  (b) Back-end DB (Virtual Classrooms, Edu-Game, Avatars, Themes, and others).

## Basic Structure of Alter Data Lake.

This is a basic outline of the MongoDB database structure created in the Alter-Learning Data Lake:
 
The cluster holds a database which will hold the institutions, teachers, students, and parents data collections.

### User Schemas
There are 4 different types of users: 

- Institutions
- Parents
- Students
- Teachers

Each user type has its own schema and is embedded within the Account Schema which contains account information such as an email and password

#### Account Schema Structure
```
{
    "_id" : "",
    "email" : "", // must be unique
    "password" : "" // encrypted password,
    "_institution": "", // reference to Institution document if Institution account
    "_parent": "", // reference to Parent document if Parent account
    "_student": "", // reference to Student document if Student account
    "_teacher": "", // reference to Teacher document if Teacher account
}
```

#### Institution Schema Structure
```
{
    "_id" : "",
    "name": "",
    "cdCode" : "",
    "district" : "",
    "location" : {
        "address" : "", // must be unique,
        "city" : "",
        "zip": "",
        "county": "",
        "state": "",
        "coordinates": {
            "latitude": "",
            "longitude": ""
        }
    },
    "contact" : {
        "mainContact": "",
        "phone": "",
        "ext" : "",
        "faxNumber": "",
        "email": ""
    }
    "admLName" : "",
    "admEmail" : "",
    "DOC" : "",
    "DOCType": "",
    "statusType" : "",
    "lastUpdated" :""
}
```

#### Parent Schema Structure
```
{
    "_id" : "", 
    "name" : {
        "firstName": "", // required
        "middleName": "", // optional
        "lastName": "" // required
    }
    "students" : [], // embedded Student documents
}
```

#### Student Schema Structure
```
{
    "_id" : "", 
    "name" : {
        "firstName": "", // required
        "middleName": "", // optional
        "lastName": "" // required
    }
    "institution": "" // reference to Institution document
    "classrooms": [], // array of references to classroomConnections 
}
```

#### Teacher Schema Structure
```
{
    "_id" : "", 
    "name" : {
        "firstName": "", // required
        "middleName": "", // optional
        "lastName": "" // required
    },
    "location": {
        "address": "",
        "city": "", // required
        "county": "", // required
        "state": "", // required
        "zip": "" // required
    },
    "phone": "",
    "institution": "", // reference to Institution document
    "classrooms": [] // array of references to classroomConnections 
}
```
### Website Component Schemas
#### Website Modals
```
{
    "learnMore": {
        "documentation": "",
        "software": "",
        "tutorials": [{         // array of tutorials with a title and text
            "title": "",
            "text": ""
        }],
        "faqs": [{              // array of faqs with a question and answer
            "question": "",
            "answer": ""
        }]
    }, 
    "aboutUs": {
        "vision": "",
        "team": [{              // array of team members with a name, role, description
            "name": "",
            "role": "",
            "description": ""
        }],
        "partners": [{          // array of partners with a name and description
            "name": "",
            "description": ""
        }]
        "company": ""
    }
}
```

### Virtual Classroom Entities
#### Classroom Connection
```
{
    "className" : "",
    "IPAddress": "",
    "port": "" 
}
```

#### Classroom Layout
All fields are numbers unless specified.
```
{
  "capacity": "",
  "layoutSetup": "",
  "theme": "",
  "twoDimensionDeskSetup": {
    "length": "",
    "width": "",
    "seatDistance": "",
    "startPosition": {
      "x": "",
      "y": "",
      "z": ""
    }
  },
  "roundTableSetup": {
    "tableRadius": "",
    "roundTableQuantity": "",
    "chairsPerRoundTable": "",
    "roundTablePositions": [] // array of positions
  },
  "conjoinedDeskGroupSetup": {
    "conjoinedDeskGroups": "",
    "desksPerConjoinedDeskGroups": ""
  }
}
