# EventTrackerProject
### Overview
Built EventTrackerProject based on Volunteers to help keep track of volunteers skills and when their availability.
### How to use
1. Download the mySQL Workbench, JPA Spring REST, MAMP, and Postman
2. Import and download the files on this Github project
3. In mySql Workbench, reverse engineer the sql file if you want to see tables
4. Change the MAMP port to whatever is available to you in Spring project application properties, currently set at 8090
5. Do a gradle refresh on the Spring and JPA projects
6. Write Postman CRUD tests to see that its conducting CRUD operations in the backend
### Implementation
- localhost: http://localhost:8090/
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
