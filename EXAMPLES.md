# Examples

This document contains scenarios showing how the rules and tips work in practice.

---

## Example 1: The Security Solution Research

**Scenario:** Need to research and make decisions about implementing a new security solution for your company.

**Traditional Approach:**
- Spend hours researching different solutions
- Create notes manually
- Organize thoughts into a document
- Write up recommendations

**Using "Be Lazy" + "Give AI Meaning":**

```
I need to research security monitoring solutions for our company. Here's my brain dump:
- We need better visibility into security events
- Must integrate with our existing infrastructure
- Budget constraints around $X
- Team size is Y people
- Current pain points: [list]
- Success criteria: [list]

Can you help me turn this into a structured research document with:
1. Market analysis of top solutions
2. Comparison matrix
3. Pros/cons for our specific situation
4. Recommendation with reasoning

The goal is to present this to leadership next week for a decision.
```

**Result:** AI handles the entire research, organization, and structuring. You focus on providing context and reviewing the output.

---

## Example 2: Creating a Documentation Project

**Scenario:** Want to document best practices to share with your team.

**What Happened:**

**❌ Bad approach:**
"Create a project for my documentation"

**✅ Good approach:**
```
I want to create a project to document best practices for working with our tools.

Context:
- I originally shared these informally with my team
- I want to refine them and eventually share more broadly
- I need a place to add ideas, brainstorm, search, and prepare presentations
- I prefer Markdown format
- The content includes guidelines, tips, and examples

Can you help me set up a good structure?
```

**Why it worked:**
- Clear context about purpose and audience
- Specific about format preferences
- Honest about the evolution (team → broader audience)
- Gave AI the "why" not just the "what"

---

## Example 3: The Stuck Bug

**Scenario:** Been trying to fix a bug for 2 hours, feeling frustrated.

**❌ Hiding frustration:**
"This code isn't working. Fix it."

**✅ Being radically honest:**
```
I'm stuck and frustrated. I've been trying to fix this authentication bug for 2 hours.

What I've tried:
- Checked the token expiration logic
- Verified the refresh token flow
- Added logging (see below)
- Compared with working code in another service

What I'm seeing:
- Users get 401 errors after ~1 hour
- Refresh tokens seem to work in isolation
- The issue only happens in production, not locally

I feel like I'm missing something obvious. Can you help me figure out what I'm not seeing?

Here's the relevant code: [paste code]
Here's the logs: [paste logs]
```

**Why it works:**
- Honest about emotional state (stuck, frustrated)
- Shows what you've already tried (saves time)
- Admits you might be missing something obvious
- Provides all relevant context

**Result:** AI can help you see the forest for the trees, often spotting the obvious thing you missed.

---

## Example 4: Building Trust Gradually

**Scenario:** New to AI coding assistants, not sure what to trust.

**The Progression:**

**Level 1 - Trivial (Week 1):**
```
"Write a function to validate email addresses"
→ Review: Check regex pattern, test with examples
→ Result: Builds confidence
```

**Level 2 - Simple (Week 2):**
```
"Add error handling to this API endpoint"
→ Review: Verify error cases, check status codes
→ Result: Trust grows
```

**Level 3 - Moderate (Week 3):**
```
"Refactor this authentication module to use async/await"
→ Review: Test thoroughly, check edge cases
→ Result: Comfortable with bigger changes
```

**Level 4 - Complex (Month 2):**
```
"Implement a caching layer for our API with Redis"
→ Review: Architecture review, performance testing
→ Result: Trust in complex features
```

**Level 5 - Critical (Month 3):**
```
"Review our entire authentication system for security vulnerabilities"
→ Review: Deep security audit, penetration testing
→ Result: Trust AI as a security partner
```

**Key Insight:** Each level builds on the previous. Don't skip steps.

---

## Example 5: Training AI to Ask Questions

**Scenario:** AI keeps making assumptions instead of asking clarifying questions.

**The Training:**

**First interaction:**
```
"Add a user profile page"

AI: [Creates a basic profile page]

You: "Wait, I needed it to show user activity history too. You should have asked what to include."
```

**Setting expectations:**
```
"Before implementing features, always ask me:
1. What should be included?
2. What's the priority?
3. Are there any constraints?
4. What's the expected user flow?

Let's try again: Add a user profile page"

AI: "Before I implement this, I have some questions:
1. What information should the profile page display?
2. Should users be able to edit their profile?
3. Are there any specific design requirements?
4. Should it show activity history or other dynamic content?"
```

**Result:** AI learns your preferences and asks better questions.

---

## Example 6: Giving AI Meaning

**Scenario:** Need to implement a new feature.

**❌ Just the task (HOW):**
"Implement a rate limiting middleware for our API"

**🤔 Adding outcome (WHAT):**
"Implement rate limiting to prevent API abuse. We're seeing some users making 1000s of requests per minute."

**✅ Adding purpose (WHY):**
```
We're implementing rate limiting because:
- We're seeing abuse patterns (1000s of requests/min from some users)
- This is affecting performance for legitimate users
- We need to protect our infrastructure costs
- Goal: Fair usage for everyone while preventing abuse

The rate limit should:
- Allow reasonable usage for normal users (100 req/min)
- Block obvious abuse (>500 req/min)
- Provide clear error messages
- Log violations for monitoring

You're helping us build a sustainable, fair API service.
```

**Why it matters:**
- AI understands the constraints (don't block legitimate users)
- AI can suggest better solutions (maybe tiered limits?)
- AI can anticipate edge cases (what about burst traffic?)
- AI feels like a partner, not just a code generator

---

## Example 7: Context Management in Action

**Scenario:** Working on a feature across multiple files.

**❌ No context:**
"Add validation to the form"

**✅ Rich context:**
```
I'm adding validation to the user registration form.

Context:
- Frontend: React with Formik
- Backend: Node.js with Express
- Current state: Form submits but no validation
- Files involved: 
  - frontend/src/components/RegisterForm.jsx
  - backend/src/routes/auth.js
  - backend/src/validators/userValidator.js

Requirements:
- Email format validation
- Password strength (min 8 chars, 1 number, 1 special char)
- Username uniqueness check (async)
- Matching password confirmation

Constraints:
- Must work with existing Formik setup
- Backend validation must match frontend
- Need clear error messages for users

Can you help me implement this across both frontend and backend?
```

**Result:** AI can implement a complete, consistent solution across the stack.

---

## Common Patterns

### Pattern 1: The Context Checklist
Before asking AI for help, ask yourself:
- [ ] What's the goal?
- [ ] What's the current state?
- [ ] What have I tried?
- [ ] What are the constraints?
- [ ] What files/systems are involved?

### Pattern 2: The Honesty Check
Before sending your prompt, ask:
- [ ] Am I asking for what I actually want?
- [ ] Am I hiding confusion or uncertainty?
- [ ] Would I ask a human colleague this way?

### Pattern 3: The Delegation Test
Before doing something manually, ask:
- [ ] Could AI do this faster?
- [ ] Could AI do this better?
- [ ] Am I avoiding delegation out of habit?

---

**Want more examples?** Open an issue with your scenario and we'll add it!

