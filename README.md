# Week 1 day 5. JS Object lab3

### Lab: Modeling in JavaScript

Individually or in teams,
try to come up with a way to represent the abstractions given below using the
tools we've learned about so far (basic types like numbers, strings, and
booleans; reference types like arrays, objects, and functions).

Say we are building a recipe website. Suppose that after careful research, we've
determined that the following things must be true about the application.

A recipe object must have:

- a name
- an author
- a list of steps
- a list of ingredients
- a number of servings that the recipe yields

An ingredient must have:

- a name
- a unit of measure (e.g. teaspoons)
- a quantity
- notes (e.g. chopped fine)

Additionally, as a bonus, the recipe should be able to:

- Print a list of its ingredients, in the following format:

  > 1 cup of flour
  >
  > 2 tablespoons of butter
  >
  > ...

### Modeling Run Tracker

One way to break up the complexity of a problem is by using multiple kinds of
objects together, and having each object be responsible for representing a small
part of the problem. But these objects don't need to exist in isolation -
objects can have other objects (or even collections of other objects) as
properties.

Suppose that we wanted to create a simple program ('RunTracker') that helps
people prepare for running a 5k. Each day that a person runs, they create a
record of their run which contains:

- the date and time of the run
- the distance covered, in meters
- the time taken, in seconds

The program also stores information about the user
- user name 
- user email
- user address

And the user can perform some calculations 
- total distance run of all runs
- longest run distance 
- average speed of all runs
