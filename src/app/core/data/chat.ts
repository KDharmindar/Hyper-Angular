import { ChatMessage, ChatUser } from '../model/chat.model'
const avatar1 = '/assets/images/users/avatar-1.jpg'
const avatar2 = '/assets/images/users/avatar-2.jpg'
const avatar3 = '/assets/images/users/avatar-3.jpg'
const avatar4 = '/assets/images/users/avatar-4.jpg'
const avatar5 = '/assets/images/users/avatar-5.jpg'
const avatar6 = '/assets/images/users/avatar-6.jpg'
const avatar7 = '/assets/images/users/avatar-7.jpg'
const avatar8 = '/assets/images/users/avatar-8.jpg'
const avatar9 = '/assets/images/users/avatar-9.jpg'

const users: ChatUser[] = [
  {
    id: 1,
    name: 'Brandon Smith',
    avatar: avatar2,
    lastMessage: 'How are you today?',
    totalUnread: 3,
    lastMessageOn: '4:30am',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'California, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Favourties',
  },
  {
    id: 2,
    name: 'Maria C',
    avatar: avatar5,
    lastMessage: "Hey! a reminder for tomorrow's meeting?",
    lastMessageOn: '5:30am',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New York, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  },
  {
    id: 3,
    name: 'Dominic A',
    avatar: avatar4,
    lastMessage: "Are we going to have this week's planning meeting?",
    totalUnread: 2,
    lastMessageOn: 'Thu',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New Jersey, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Favourties',
  },
  {
    id: 4,
    name: 'Ronda D',
    avatar: avatar9,
    lastMessage: 'Please check these design assets..',
    lastMessageOn: 'Wed',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'California, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  },
  {
    id: 5,
    name: 'Michael H',
    avatar: avatar6,
    lastMessage: 'Are you free for 15 mins? I would like to discuss something',
    totalUnread: 6,
    lastMessageOn: 'Tue',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New York, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  },
  {
    id: 6,
    name: 'Thomas R',
    avatar: avatar7,
    lastMessage: "Let's have meeting today between me, you and Tony...",
    lastMessageOn: 'Tue',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New Jersey, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  },
  {
    id: 7,
    name: 'Thomas J',
    avatar: avatar8,
    lastMessage: 'Howdy?',
    lastMessageOn: 'Tue',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New York, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Favourties',
  },
  {
    id: 8,
    name: 'Rikcy J',
    avatar: avatar3,
    lastMessage: 'Are you interested in learning?',
    totalUnread: 28,
    lastMessageOn: 'Mon',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'New Jersey, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  },
]

const messages: ChatMessage[] = []

const defaultTo: ChatUser = {
  id: 9,
  name: 'Shreyu N',
  avatar: avatar1,
  email: 'support@coderthemes.com',
  phone: '+1 456 9595 9594',
  location: 'California, USA',
  languages: 'English, German, Spanish',
  groups: 'Work, Friends',
}

for (const user of users) {
  messages.push(
    {
      id: 1,
      message: {
        type: 'text',
        value: { text: 'Hello!' },
      },
      to: defaultTo,
      from: user,
      sendOn: '10:00',
    },
    {
      id: 2,
      message: {
        type: 'text',
        value: { text: 'Hi, How are you? What about our next meeting?' },
      },
      to: user,
      from: defaultTo,
      sendOn: '10:01',
    },
    {
      id: 3,
      message: {
        type: 'text',
        value: { text: 'Yeah everything is fine' },
      },
      to: defaultTo,
      from: user,
      sendOn: '10:01',
    },
    {
      id: 4,
      message: {
        type: 'text',
        value: { text: 'Awesome!' },
      },
      to: user,
      from: defaultTo,
      sendOn: '10:02',
    },
    {
      id: 5,
      message: {
        type: 'text',
        value: { text: "Let's have it today if you are free" },
      },
      to: defaultTo,
      from: user,
      sendOn: '10:03',
    },
    {
      id: 6,
      message: {
        type: 'text',
        value: { text: 'Sure thing! let me know if 2pm works for you' },
      },
      to: user,
      from: defaultTo,
      sendOn: '10:03',
    },
    {
      id: 7,
      message: {
        type: 'text',
        value: {
          text: 'Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?',
        },
      },
      to: defaultTo,
      from: user,
      sendOn: '10:04',
    },
    {
      id: 8,
      message: {
        type: 'text',
        value: {
          text: 'We can also discuss about the presentation talk format if you have some extra mins',
        },
      },
      to: defaultTo,
      from: user,
      sendOn: '10:04',
    },
    {
      id: 9,
      message: {
        type: 'text',
        value: {
          text: "3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here..",
        },
      },
      to: user,
      from: defaultTo,
      sendOn: '10:05',
    },
    {
      id: 10,
      message: {
        type: 'file',
        value: {
          file: 'Hyper-admin.zip',
          size: '2.3MB',
        },
      },
      to: user,
      from: defaultTo,
      sendOn: '10:05',
    }
  )
}

export { users, messages }
