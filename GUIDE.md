# Core Rules and Tips for Working with AI

*A comprehensive guide to maximizing success with AI coding assistants*

---

## The 4 Fundamental Rules

### 1. Understand and Manage Context

**The Core Insight:**
- **Humans** are good at thinking AND managing context
- **AI** is good at thinking but "bad" at managing context

This is THE fundamental difference. AI won't automatically know what context it needs, and it won't ask for it unless you train it to. Context management is your job, and it's the bottleneck that determines success or failure.

**Always think about whether you need to add context.**

Continuously evaluate:
- Does the AI have enough background to understand my request?
- Are there files, dependencies, or constraints it should know about?
- What assumptions might it make without proper context?
- What would I need to know if I were starting fresh on this task?

**Examples:**
- ❌ "Fix the login bug"
- 🤔 "Fix the login bug in auth.js - we're using JWT tokens and the issue happens when tokens expire"
- ✅ "Fix the login bug in auth.js - we're using JWT tokens with 1-hour expiration. The issue happens when tokens expire: users get a 401 error instead of being redirected to login. Our auth flow uses refresh tokens stored in httpOnly cookies. The frontend is React and expects a redirect response."

**Example:**
When asking AI to create a project structure, you could just say "create a project for documentation." Instead, provide context: your objective (document best practices), your audience (team members), your use cases (adding content, searching, presenting), and your format preference (Markdown). This context shapes everything the AI creates.

#### Context Quality Matters

Not all context is helpful. Be aware of these common pitfalls:

**Context Poisoning:**
Providing wrong or misleading information that leads AI down the wrong path.

Examples:
- Making incorrect assumptions explicit: "This uses JWT tokens" when it actually uses sessions
- Sharing outdated information: "We use React 16" when the project is on React 18
- Misidentifying the problem: "The database is slow" when it's actually a caching issue

**Context Rot:**
Too much irrelevant context that causes AI to lose focus on what matters.

Examples:
- Sharing entire repository when only one module is relevant
- Including historical decisions that no longer apply
- Providing excessive background that drowns out the actual task

**Best Practices:**
- Provide necessary context, but curate for relevance
- Verify your assumptions before sharing them as facts
- Help AI focus on what matters for the current task
- When in doubt, provide context but acknowledge uncertainty: "I think this uses JWT, but I'm not certain"

### 2. Be Honest

**Be radically honest with the AI about your intentions and desires. But first, be radically honest with yourself.**

Don't let your human feelings or ego get in the way of honesty. The AI doesn't judge you - use that to your advantage.

Clarity starts with you:
- What do you really want to achieve?
- What are your actual constraints and concerns?
- What are you uncertain about?
- What are you afraid of?
- What don't you understand?

Then communicate this honestly to the AI. Don't hide confusion, don't pretend to know what you don't, and don't ask for something different from what you actually need.

**Examples - from safe to radical:**
- ❌ "Make this code better" (when you're actually worried about performance)
- 🤔 "I'm concerned this code might be slow with large datasets. Help me understand if there's a performance issue and how to fix it."
- ✅ "I don't understand this codebase and I'm afraid to break it. I need to add a feature but I'm not sure where to start. Can you help me understand the architecture first, then guide me through making changes safely?"
- ✅✅ "I'm stuck and frustrated. I've been trying to fix this bug for 2 hours and I don't even know what to ask for. Here's what I've tried... I feel like I'm missing something obvious. Can you help me figure out what I'm not seeing?"

**Example:**
Sharing your actual thoughts and feelings with AI - even about colleagues, your own uncertainties, or your emotional state - gives the AI crucial context about what you really need. For instance, saying "I want to document these practices as I originally shared them with my team - practical knowledge, not academic theory" helps the AI understand the tone and approach you need.

### 3. Be Lazy

**For everything that takes you time, ask yourself: Can I get AI to do this instead?**

This isn't about avoiding work - it's about maximizing your impact. Push the boundaries of what you delegate.

**Examples - from simple to extreme:**
- ✅ Writing boilerplate code → AI can do it
- ✅ Renaming variables across files → AI can do it
- ✅ Writing test cases → AI can do it
- ✅ Researching API documentation → AI can do it
- ✅✅ Writing an entire feature from scratch → AI can do it
- ✅✅ Refactoring a whole module → AI can do it
- ✅✅ Reviewing all your code and finding issues → AI can do it
- ✅✅ Setting up a complete project structure → AI can do it
- ✅✅✅ Taking your high-level mind-dump and turning it into a structured research and decision-making document → AI can do it

**Example:**
Moving an entire thought process - a high-level task like "research and decision-making for a new security solution" - from your brain dump into a structured analysis. This isn't just saving time on typing; it's delegating the entire cognitive work of organizing, researching, and structuring complex information.

Focus your energy on high-value activities: architecture decisions, strategic thinking, code review, and guiding the AI toward the right outcomes.

### 4. Take Accountability

**AI is an extension of you, not a separate entity. You own everything it produces.**

The accountability mindset:
- AI's output is YOUR output
- You are responsible for reviewing and validating everything
- You own the results in code reviews, PRs, and production
- Take accountability without shame - this is empowering, not limiting

**Why This Matters:**

People often ask: "Can I trust AI code?"
The answer: "Yes, because YOU validate it."

This shifts the question from "trust the AI to be perfect" to "trust yourself to validate." It's not about the AI being infallible - it's about you being responsible.

**Examples of Taking Ownership:**

❌ "The AI generated buggy code"
✅ "I didn't review the code carefully enough before merging"

❌ "The AI misunderstood the requirements"
✅ "I didn't provide clear enough context"

❌ "The AI made a security mistake"
✅ "I failed to validate the security implications"

**The Deeper Truth:**

This accountability mindset actually INCREASES your value:
- You're not just a code typist
- You're the architect, reviewer, and owner
- AI is your tool, you're the craftsperson
- The responsibility is yours, and so is the credit

**In Practice:**

When you submit a PR with AI-generated code:
- You're accountable for it, whether or not you disclose AI usage
- You've validated it works correctly
- You understand what it does (even if not every implementation detail)
- You own any issues that arise

You don't have to pretend you wrote every character yourself, but you do have to take full responsibility for what you're submitting. This is professional responsibility. It's empowering, not burdensome.

**The Complete Cycle:**

The 4 Rules form a complete framework for AI collaboration:
1. **Context** - Input quality (what AI receives)
2. **Honesty** - Communication quality (how you interact)
3. **Laziness** - Delegation scope (what you delegate)
4. **Accountability** - Output ownership (what you deliver)

Together, these cover the entire collaboration cycle from start to finish.

---

## The 6 Practical Tips

### 1. Help AI Help Himself

**Tell the agent to manage its own "long-term memory" using files.**

AI has limited context windows, but it can use files as external memory:
- Ask it to create notes/documentation files for complex projects
- Remind it periodically to read those files to rebuild context
- Let it maintain its own TODO lists, decision logs, or architecture notes

**Example prompts:**
- "Create a project-notes.md file to track our decisions and architecture. Refer to it when needed."
- "Before starting this task, read the project-notes.md file to understand our architecture and previous decisions."
- "Update the project-notes.md file with the decisions we just made, so you can reference them in future conversations."
- "I want you to maintain a running log of our work in work-log.md. Before each session, read it to get context on where we left off."

**Example:**
When working on a multi-session project, you can ask AI to create a notes file to track decisions and architecture. Then, in future sessions, remind the AI to read that file first before making changes. This helps maintain consistency across conversations.

### 2. Take AI's Perspective

**Put yourself in AI's position to understand what context it needs.**

Think about the AI's perspective:
- What information does it have right now?
- What might be confusing or ambiguous in my request?
- What would I need to know if I were starting fresh on this task?
- If I just joined this project, what context would I be missing?

This mental exercise - perspective-taking - helps you provide better context and clearer instructions.

**Example - Without perspective-taking:**
"Fix the tests"
→ AI doesn't know: Which tests? What's broken? What's the test framework? What should pass?

**Example - With perspective-taking:**
"The integration tests in `/tests/api/` are failing because I just refactored the authentication module. The tests expect the old API. Please update the tests to work with the new auth flow (see `auth.js` for the new implementation). We're using Jest."
→ AI has everything it needs to succeed.

**Real pattern:**
When you're frustrated that AI "doesn't get it," pause and ask: "What am I seeing that the AI can't see?" Usually, it's context in your head that you haven't shared.

### 3. Train AI to Take Your Perspective

**Teach AI to understand your perspective and ask clarifying questions.**

Explicitly encourage the AI to take your perspective and ask for what it needs:

**Concrete prompts to use:**
- "If anything is unclear, please ask me questions before proceeding"
- "Make sure you understand what I need - ask clarifying questions if needed"
- "It's important that you fully understand my goal. What questions do you have?"
- "Before you start, tell me what you understand about my request and ask about anything that's ambiguous"
- "Put yourself in my position - what context would you need to do this well?"

**Example - Without training:**
You: "Refactor this code"
AI: *Proceeds to refactor without asking questions*
Result: AI refactors in a way you didn't want

**Example - With training:**
You: "Refactor this code. Before you start, make sure you understand what I'm looking for - ask me questions."
AI: "What aspects are you most concerned about? Performance? Readability? Testability? Are there any patterns or conventions I should follow?"
Result: AI refactors exactly what you need

This creates a two-way communication flow and helps the AI request the context it needs.

### 4. Build Trust with AI

**You cannot blindly trust AI - but you can gradually build trust through validation.**

The trust-building process:
1. **Start small:** Use AI for simple, low-risk tasks
2. **Verify thoroughly:** Check everything the AI produces
3. **Learn patterns:** Understand what the AI does well and where it struggles
4. **Gradually expand:** Give it more complex tasks as your confidence grows
5. **Check less frequently:** As trust builds, reduce verification overhead

This is a two-way trust:
- Trust in the AI's capabilities
- Trust in YOUR ability to guide and work with the AI

**Concrete progression examples:**

**Level 1 - Trivial (High verification):**
- "Format this JSON"
- "Write a simple unit test for this function"
- Check: Every character

**Level 2 - Simple (Medium-high verification):**
- "Add error handling to this function"
- "Refactor this function to be more readable"
- Check: Logic and edge cases

**Level 3 - Moderate (Medium verification):**
- "Implement this feature based on the spec"
- "Fix this bug and add tests"
- Check: Architecture decisions and test coverage

**Level 4 - Complex (Low-medium verification):**
- "Design and implement this entire module"
- "Refactor this subsystem to use the new pattern"
- Check: High-level design and critical paths

**Level 5 - Critical (Strategic verification):**
- "Research and propose a solution for this architectural problem"
- "Review the entire codebase and suggest improvements"
- Check: Strategic direction and major decisions

**Important:** Don't get stuck at Level 1-2 doing only trivial tasks, but don't jump to Level 4-5 too quickly. Find the right progression based on your growing confidence.

### 5. Give AI Meaning

**Communicate purpose, not process. Give the AI its meaning.**

"Meaning" is fluid - it can be a role, an objective, a purpose, or a goal. The key is to help the AI understand WHY it exists in this conversation, not just WHAT to do.

There's a hierarchy of instruction quality:
- **Worst:** Tell the AI *HOW* to do something (specific implementation steps)
- **Better:** Tell the AI *WHAT* to do (the desired outcome)
- **Best:** Tell the AI *WHY* - the goal, purpose, or meaning

**Example progression - Task level:**
- ❌ HOW: "Use the str-replace-editor tool to change line 42 in auth.js to add a try-catch block"
- 🤔 WHAT: "Add error handling to the login function in auth.js"
- ✅ PURPOSE: "Users are seeing crashes when the auth server is down. Make the login system resilient to server failures."

**Example progression - Identity/Role level:**
- ❌ "Fix these bugs" (no meaning)
- 🤔 "You're helping me fix bugs in this codebase" (basic role)
- ✅ "You are a software engineer and your goal is to produce the best code possible with the right context and limitations" (role + purpose)
- ✅✅ "Your objective is to help me document my rules and tips regarding the use of AI, so that other engineers can learn to work effectively with AI assistants" (mission + impact)

**Example:**
Instead of saying "Create a documentation project," you could say "The objective is to document best practices for our team. Ultimately, we want to present these ideas to help other engineers succeed." This gives the AI meaning - it's not just creating files; it's helping you share knowledge that could impact others.

When the AI understands the meaning, it can make better decisions, suggest better solutions, and align its work with your true goals.

### 6. Remember Your Own Meaning

**You have meaning. Don't let fear stop you from mastering AI.**

Working with AI triggers real anxiety:
- "Will AI replace me?"
- "Am I becoming less valuable?"
- "What's my role if AI does the coding?"
- "Should I even learn this if it might make me obsolete?"

**Here's the truth:**
These fears are natural, but they're backwards. The engineers who will struggle are those who DON'T learn to work with AI. The engineers who will thrive are those who master it.

**Your value isn't in typing code - it's in:**
- Understanding what needs to be built and why
- Making architectural and design decisions
- Knowing what questions to ask
- Providing context and judgment
- Reviewing and validating solutions
- Guiding AI toward the right outcomes

**The reality:** If you know how to work well with AI, you'll have work. If you resist it, you'll be left behind. 😉

**Practical advice:**
Don't let these mental and emotional barriers stop you from experimenting. Start small, build trust (see Tip 4), and gradually expand what you delegate. Your meaning comes from being an effective problem-solver - and AI is a tool that makes you MORE effective, not less.

---

## The Twist: Universal Principles

**Almost everything above works with humans and human intelligence too!**

These aren't just "AI rules" - they're principles of effective collaboration:
- Managing context → Ensuring shared understanding
- Being honest → Authentic communication
- Being lazy → Effective delegation
- Taking accountability → Owning delegated work
- Perspective-taking → Understanding different viewpoints
- Giving meaning → Purpose-driven leadership
- Building trust → Gradual relationship development

The best practices for working with AI are often the best practices for working with people.

When you delegate to a junior developer, you still take accountability for the output. When you use a library, you're accountable for choosing it. Same principle with AI.

---

*Created: 2026-02-21*

