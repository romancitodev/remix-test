import { sleep } from "~/utils/sleep"

type Contact = {
  contactId: string
}

export const getContact = async (contactId: Contact['contactId']): Promise<Contact> => {
  await sleep(2); // 2 Seconds.
  return { contactId }
}
