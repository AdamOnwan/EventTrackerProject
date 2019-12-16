# NgEventTracker
### Overview
Built ngEventTracker based on Volunteers to help keep track of volunteers skills and when their availability.
### How to use
1. Goto the url
2. You will be in the main page, here you see the list of all volunteers, with ability to click on one of them to view more details, and can create new volunteers
3. Update volunteers by clicking on them into detail page and then type in information you want to update and click save
4. Delete volunteers by clicking on them from the list to view details and then click the X to delete, you can also delete from the list page clicking on the X
5. To go back to the list, refresh the page

### Implementation
- localhost: http://localhost:4209/
### Expected Routes

| Return Type | Route                 | Functionality                  |
|-------------|-----------------------|--------------------------------|
| `List<Volunteer>`  |`GET api/volunteers`        | Gets all volunteers                 |
| `Volunteer`        |`GET api/volunteers/{volunteerId}`   | Gets one volunteer by id            |
| `Volunteer`        |`POST api/volunteers`       | Creates a new volunteer             |
| `Volunteer`        |`PUT api/volunteers/{volunteerId}`   | Replaces an existing volunteer by id|
| `Boolean`     |`DELETE api/volunteers/{volunteerId}`| Deletes an existing volunteer by id |
### Technologies used
* `SQL & MySQL Workbench`
 - For Database
* `Spring Tool Suite, Spring Boot, & Spring REST`
 -  For development
* `JPA`
 - For communication from development to web
* `Github, Git`
 - For development coordination
* `Gradle`
 - Used for dependency management
* `MAMP`
- Provides the localhost to run Postman tests on
### Why I built EventTrackerProject for Volunteers
- I have been learning Salesforce NPSP and wanted to make it similar to how the volunteers 4 salesforce tracks volunteer data, and maybe link this app to the Salesforce NPSP.
### Lessons Learned
1. I spent a lot of time trying to figure out why I'm getting an error about UnsatisfiedDependencyException:, BeanCreationException:, java.lang.IllegalArgumentException: Not a managed type:, was very frustrating and had me triple checking all of my gradle, application properties, and persistence.xml, what the solution came out to be was that my package naming convention was different than in my spring starter app. So I learned that package naming convention must match or else projects will not sync together properly.
2. More familiar with reading error message and console because of looking at error message for such a long time.
