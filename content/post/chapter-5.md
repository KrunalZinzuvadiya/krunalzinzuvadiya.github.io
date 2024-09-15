---

date: 2024-09-15T10:00:00+00:00  
description: "Connect4 AI with Minimax and Reinforcement Learning"  
featured_image: "/images/Connect4.jpg"  
tags: ["AI", "Reinforcement Learning", "Minimax", "Connect4"]  
title: "Connect4 AI: Minimax vs. Reinforcement Learning"  
---

This project demonstrates the implementation of the Connect4 game, with two AI agents playing against each other: one based on the Minimax algorithm and the other using Reinforcement Learning (RL). The Minimax algorithm evaluates the game tree to make optimal moves, while the RL agent learns from rewards and experiences.

### Game Mechanics

The game is built on the traditional Connect4 rules, with players taking turns to drop their pieces into a vertical grid. The goal is to connect four pieces in a row, either vertically, horizontally, or diagonally.

### Minimax Algorithm

The Minimax AI uses depth-limited search with alpha-beta pruning to explore the game tree and evaluate board positions. It aims to maximize its own score while minimizing the opponent's score.

- Maximizing Player: The AI tries to maximize the score when it's its turn.
- Minimizing Player: It assumes the opponent (the player) will try to minimize the score on their turn.


 Reinforcement Learning (RL) Agent

The RL bot is trained using Temporal Difference Learning, where it learns from the outcome of each game. Positive rewards are given for winning moves, and negative rewards for losing ones.

### Training and Results

The AI is tested through multiple games where the RL bot competes against the Minimax agent. The winning rates of both agents are recorded:

- RLBot Wins: 85%  

![alt text](/images/GamePlay01.jpg "Connect4 Gameplay part 1")
![alt text](/images/GamePlay02.jpg "Connect4 Gameplay part 2")
![alt text](/images/GamePlay03.jpg "Connect4 Gameplay part 3")

---
