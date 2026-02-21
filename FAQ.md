# Frequently Asked Questions

## General Questions

### Q: Is this just another prompt engineering guide?

**A:** No. This is a **mindset and relationship framework**, not a collection of prompting techniques.

Other guides teach you *how to write prompts*. This guide teaches you *how to think about working with AI*.

Think of it this way:
- **Prompt engineering guides** = Grammar and vocabulary
- **This guide** = How to have meaningful conversations

### Q: Which AI tools does this apply to?

**A:** All of them. The principles are universal.

This guide was developed using Augment AI, Claude, and GitHub Copilot, but the framework applies to any AI assistant because it's based on fundamental collaboration principles, not tool-specific features.

### Q: I'm not a software engineer. Is this still relevant?

**A:** Yes! While the examples are from software engineering, the principles apply to any AI collaboration:
- Writing and editing
- Research and analysis
- Data processing
- Creative work
- Problem-solving

The "twist" is that these principles work with humans too, which makes them universal.

### Q: How long does it take to see results?

**A:** Immediate for some tips, gradual for others.

- **Immediate impact:** Context management, being lazy, helping AI manage memory
- **Builds over time:** Trust progression, training AI to ask questions
- **Mindset shift:** Understanding the "why" behind everything

Most people report significant improvement within the first week.

---

## About the Rules

### Q: Why is context management Rule #1?

**A:** Because it's THE fundamental bottleneck.

AI is excellent at thinking but poor at managing context. Humans are good at both. This asymmetry explains most AI failures.

Once you internalize this, you'll automatically:
- Provide better context upfront
- Recognize when AI is missing information
- Understand why AI sometimes gives wrong answers

### Q: What does "radically honest" really mean?

**A:** It means treating AI like a judgment-free collaborator.

Examples:
- "I don't understand this code and I'm afraid to break it"
- "I'm stuck and frustrated after 2 hours"
- "I'm not sure what I'm asking for - help me figure it out"
- "I'm worried this approach might be wrong"

AI doesn't judge you. Use that advantage. The more honest you are, the better help you'll get.

### Q: Isn't "Be Lazy" just encouraging bad habits?

**A:** No - it's about **strategic delegation**, not avoiding work.

"Be Lazy" means:
- ✅ Delegate repetitive tasks to AI
- ✅ Let AI handle the heavy lifting
- ✅ Focus your energy on high-value activities
- ❌ Blindly accept AI output without review
- ❌ Avoid learning or understanding

Think of it like using a calculator: You're not "lazy" for not doing arithmetic by hand. You're being efficient.

---

## About the Tips

### Q: How do I "help AI help himself" practically?

**A:** Use files as AI's external memory.

Simple pattern:
1. Ask AI to create a `project-notes.md` file
2. Have AI document decisions, architecture, and context there
3. Before each session, remind AI to read that file
4. AI rebuilds context from its own notes

This works because AI can read files but has limited conversation memory.

### Q: What's the difference between the two empathy tips?

**A:** Direction of empathy.

- **Tip 2 (Human→AI):** You make it easy for AI to help you
  - Provide clear context
  - Structure your requests well
  - Give examples

- **Tip 3 (AI→Human):** You train AI to make it easy for you
  - Teach AI to ask clarifying questions
  - Set expectations about what you need
  - Train AI to your preferences

Both are necessary for effective collaboration.

### Q: How do I know what trust level I'm at?

**A:** Use the progression framework:

1. **Trivial:** Simple, isolated tasks (write a function)
2. **Simple:** Small features with clear requirements
3. **Moderate:** Refactoring, multi-file changes
4. **Complex:** Architecture decisions, new systems
5. **Critical:** Security reviews, production deployments

Start at Level 1 and move up as you build confidence. Don't skip levels.

### Q: What does "giving AI meaning" actually accomplish?

**A:** Better solutions and fewer misunderstandings.

When AI understands the WHY:
- It can suggest better approaches
- It anticipates edge cases
- It makes better trade-off decisions
- It feels like a partner, not a tool

Example:
- Without meaning: "Add caching" → AI adds basic caching
- With meaning: "Add caching to reduce database load during peak hours" → AI considers cache invalidation, TTL strategies, and monitoring

---

## Common Concerns

### Q: Won't I become too dependent on AI?

**A:** You're learning to work with the future, not being replaced.

Think about it:
- Calculators didn't make mathematicians obsolete
- IDEs didn't make programmers obsolete
- Google didn't make researchers obsolete

AI is a tool that amplifies your capabilities. The skill is knowing how to use it effectively.

**Tip #6 (Remember Your Own Meaning)** addresses this directly.

### Q: How do I know if I can trust AI's output?

**A:** Use the trust progression framework.

Start with trivial tasks where you can easily verify the output. Gradually increase complexity as you build confidence.

Always:
- ✅ Review AI output before using it
- ✅ Test thoroughly
- ✅ Understand what the AI did
- ❌ Blindly copy-paste without review

### Q: What if AI gives me wrong information?

**A:** This is expected and manageable.

AI makes mistakes. Your job is to:
1. **Verify** - Always review output
2. **Correct** - Point out errors and ask for fixes
3. **Learn** - Understand why it was wrong
4. **Improve** - Provide better context next time

This is why we start with trivial tasks and build trust gradually.

### Q: Should I use AI for everything?

**A:** No. Use judgment.

**Good for AI:**
- Repetitive tasks
- Boilerplate code
- Research and summarization
- Brainstorming and ideation
- Code review and analysis

**Be careful with:**
- Security-critical code (review extra carefully)
- Sensitive data (privacy concerns)
- Final decisions (AI advises, you decide)
- Learning fundamentals (understand before delegating)

---

## Implementation Questions

### Q: How do I get started today?

**A:** Three steps:

1. **Read Rule #1** - Understand context management
2. **Try Tip #1** - Help AI manage its own memory
3. **Use the Quick Reference** - Copy-paste prompts

Start small. Pick one rule or tip and practice it for a week.

### Q: Can I share this with my team?

**A:** Yes! That's the goal.

This guide is MIT licensed. Share it, adapt it, use it for training.

If you find it helpful, consider:
- Sharing your experience (open an issue)
- Contributing examples
- Translating to other languages

### Q: How do I convince my team to adopt these practices?

**A:** Start with yourself, then share results.

1. **Demonstrate value** - Use these practices and show the impact
2. **Share examples** - Show before/after comparisons
3. **Start small** - Introduce one rule or tip at a time
4. **Gather feedback** - Adapt to your team's needs

People adopt practices when they see them work.

---

## About This Guide

### Q: Why was this created?

**A:** After working extensively with AI coding assistants, a pattern emerged: The best practices for working with AI were almost identical to best practices for working with humans.

This insight - "the twist" - made everything click. This framework helps people understand the *why*, not just the *what*.

### Q: Can I contribute?

**A:** Absolutely! Contributions welcome:

- **Examples** - Practical scenarios from your experience
- **Improvements** - Better explanations or frameworks
- **Translations** - Other languages
- **Questions** - For the FAQ

Open an issue or PR on GitHub.

### Q: Is there a course or workshop?

**A:** Not yet, but potentially in the future.

For now, the guide is free and open-source. If there's interest in workshops or training, let me know via GitHub issues.

---

**Have a question not answered here?** [Open an issue](https://github.com/shachar-xor/ai-usage-rules-and-tips/issues) and we'll add it!

