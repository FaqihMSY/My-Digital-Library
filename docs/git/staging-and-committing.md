---
title: Staging & Committing
---

# Staging & Committing Files

This section dives deeper into the `git add` and `git commit` commands.

## The Staging Area

The staging area is an intermediate step before committing. It allows you to group related changes into a single commit.

- `git add <file>`: Stages a specific file.
- `git add .`: Stages all new and modified files in the current directory.

## Committing Changes

Once you have staged the changes you want to save, you create a commit.

```bash
git commit -m "Your descriptive commit message"
```

A commit is a snapshot of your staged changes at a specific point in time. The message should clearly explain what the commit does.
