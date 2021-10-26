# Overview

A simple mobile app built for the patients of a pharmaceutical client and the general public to provide more information about medications they produce and how they are connected to diseases they research.

### `Features`

User is able to search for the medication by using the medication name of the list of diseases associated with the medication and they get the data they queried for returned to them in a list view.

# Technologies used

1. React native for building native mobile apps for android and ios devices.
2. React hooks used with functional components.
3. React-query for state management and querying of data.
4. jest and @testing-library/react-native for unit tests.
5. Typescript: A superset of Javascript (to help with type declarations).
6. Eslint for linting.
7. styled-components for styling.

### `Design pattern`

I used an architecture similar to MVP (model-view-presenter) architecture. the model attribute had to do with the Medication data in which the interface was declared in the config/interfaces.ts file, the view was the file that has all the jsx properties and the logic had all the functions/methods i.e. src/screens/Medications -> Medications.tsx, src/screens/Medications -> MedicationsLogic.ts

### `Tests`

For unit tests, they can be found in src/screens/Medications -> Medications.test.tsx (For the Medications screen), and src/components/ListView.test.tsx (For the ListView Component) run the 'yarn test' command in terminal to run the tests
