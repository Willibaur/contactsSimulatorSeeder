import * as Contacts from 'expo-contacts'
import { faker } from '@faker-js/faker'

const generateFakeContact = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    [Contacts.Fields.Addresses]: [
      {
        city: faker.location.city(),
        id: faker.string.uuid(),
        label: 'Home',
        postalCode: faker.location.zipCode(),
        street: faker.location.street()
      }
    ],
    [Contacts.Fields.ContactType]: Contacts.ContactTypes.Person,
    [Contacts.Fields.Emails]: [
      {
        email: faker.internet.email(),
        id: faker.string.uuid(),
        label: 'Personal'
      }
    ],
    [Contacts.Fields.ID]: faker.string.uuid(),
    [Contacts.Fields.FirstName]: firstName,
    [Contacts.Fields.LastName]: lastName,
    [Contacts.Fields.Name]: `${firstName} ${lastName}`,
    [Contacts.Fields.PhoneNumbers]: [
      {
        id: faker.string.uuid(),
        label: 'Mobile',
        number: faker.phone.number()
      }
    ]
  }
}

export const isSimulatorSeeded = async ({
  minimumContacts = 100
}: {
  minimumContacts?: number
}) => {
  const { status } = await Contacts.requestPermissionsAsync()

  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({})

    console.log('💻 🐛 - isSimulatorSeeded - data.length:', data.length)
    return data.length > minimumContacts
  }

  console.info('🚫 Permission for accessing contacts was denied')
  return false
}

export const seedSimulator = async ({
  numberOfContacts = 100
}: {
  numberOfContacts?: number
}): Promise<void> => {
  const { status } = await Contacts.requestPermissionsAsync()

  if (status === 'granted') {
    console.warn(`🌱 Seeding ${numberOfContacts} contacts....`)

    const promises = []

    for (let contacts = 0; contacts < numberOfContacts; contacts++) {
      const contact = generateFakeContact()
      console.log('💻 🐛 🐾 🥷 seedSimulator 🥷 contact:', contact)
      promises.push(Contacts.addContactAsync(contact))
    }

    await Promise.all(promises)
    const { data } = await Contacts.getContactsAsync({})
    console.warn(
      `🌱 ${numberOfContacts} contacts were seeded, ${data.length} in total!`
    )
  } else {
    console.error('🚫 Permission for accessing contacts was denied')
  }
}
