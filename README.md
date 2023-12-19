# contactsSimulatorSeeder

- [contactsSimulatorSeeder](#contactssimulatorseeder)
  - [Installation](#installation)
  - [Code Explanation](#code-explanation)
    - [contacts.ts](#contactsts)
  - [Usage](#usage)

## Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.

## Code Explanation

### contacts.ts

This file contains code related to generating fake contacts using the Expo Contacts library and the Faker.js library.

- The `generateFakeContact` function generates a fake contact object with random data using the `faker` library. It creates an object with properties such as addresses, contact type, emails, ID, first name, last name, name, and phone numbers.

- The `isSimulatorSeeded` function is an asynchronous function that checks if the simulator is seeded with a minimum number of contacts. It takes an optional parameter `minimumContacts` which defaults to 100.

  - It first requests permission to access the device's contacts using `Contacts.requestPermissionsAsync().
  - If the permission is granted (`status === 'granted'`), it calls `Contacts.getContactsAsync({})` to retrieve the contacts data.

## Usage

To use this code, make sure you have the necessary dependencies installed:

- `expo-contacts`: Install it using `npm install expo-contacts`.
- `@faker-js/faker`: Install it using `npm install @faker-js/faker`.

Then, you can import and use the functions from this file in your project.

```typescript
import * as Contacts from 'expo-contacts'
import { faker } from '@faker-js/faker'

// Generate a fake contact
const fakeContact = generateFakeContact()

// Check if the simulator is seeded with a minimum number of contacts
isSimulatorSeeded({ minimumContacts: 100 })
  .then(() => {
    // Do something after checking
  })
  .catch((error) => {
    // Handle error
  })
