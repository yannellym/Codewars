import random 
import replit

logo = ''' .------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \  /|K /\  |     | '_ \| |/ _` |/ __| |/ / |/ _` |/ __| |/ /
|  \/ | /  \ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
`-----| \  / |     |_.__/|_|\__,_|\___|_|\_\ |\__,_|\___|_|\_\
      |  \/ K|                            _/ |                
      `------'                           |__/           

'''
print(logo)
new_game = input("Do you want to play a game of BlackJack? Type 'y' for yes or 'n' for no: \n")


should_continue = True
user_cards = []
computer_cards = []
user_total = 0
computer_total = 0


def int_generator():
  return random.randint(0,11)

def play_blackjack():
  global should_continue
  if new_game == "y":
      user_cards.extend([int_generator(),int_generator()])
      computer_cards.extend([int_generator()])
      print(f"Your cards: {user_cards}, current score: {sum(user_cards)}")
      print(f"Computer's first card: {computer_cards}")
      
      user_input = input("Type 'y' to get another card, type 'n' to pass: \n")
      if user_input == "n":
        replit.clear()
        should_continue = False
        user_total = sum(user_cards)
        computer_total = sum(computer_cards)
        print(f"Your final hand: {user_cards}, final score: {user_total}")
        print(f"Computer's final hand: {computer_cards}, final score: {computer_total}")
        if user_total > computer_total and user_total <= 21:
          print("You win :) ")
        else:
          print("You lose :( ")
      play_blackjack()
    
while should_continue:
  play_blackjack()
