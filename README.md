# React Router Dom navigate hook not working in nested components

This repository demonstrates a common issue encountered when using the `useNavigate` hook from `react-router-dom` within nested components that are not directly rendered as children of a `<Route>` component.

## Problem

The `navigate` function is not working as expected when called from within a component that is deeply nested. The navigation does not happen or produces unexpected results.

## Solution

The solution involves correctly managing the context of the router within the component tree. The bug.js demonstrates the initial problem, and bugSolution.js demonstrates a fix using the `useLocation` and `useNavigate` hooks correctly in the context of a React Router component tree. The `useNavigate` hook needs to be within a component rendered by `<Route>`. Using context to move up the tree to access the router's functionality isn't recommended, instead restructure the components within your Route components.