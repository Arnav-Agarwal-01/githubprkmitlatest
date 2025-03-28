# PR KMIT Website

## Navigation
The website uses a tubelight-style navbar for navigation between different pages. The navbar is fixed at the top of the screen on desktop and at the bottom on mobile devices.

## Messaging System
The website includes a contact form that allows visitors to send messages to the admin. Here's how the messaging system works:

### For Visitors:
1. Navigate to the Contact page
2. Fill out the contact form with your name, email, and message
3. Submit the form
4. You'll receive a confirmation message that your message has been sent

### For Admins:
To view messages sent through the contact form:

1. Navigate to `/admin/messages`
2. Enter the password: `prkmit2024`
3. After successful authentication, you'll see all messages listed in chronological order
4. Each message displays:
   - Sender's name
   - Sender's email
   - Message content
   - Timestamp of when the message was sent

**Note:** The messaging system uses browser localStorage to store messages. This means:
- Messages are stored only in the browser where they were submitted
- Messages will persist even if you close the browser, but will be lost if you clear browser data
- For a production environment, consider implementing a server-side database solution