// Code your solutions in this file
const messages = []

function writeCards(names, event) {
  for (let i = 0;names.length > i; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return messages
}

function countDown() {
    let count = 0;
    while (count < 11) {
        console.log(count++)
    }
}

