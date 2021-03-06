export const simpleConfig = `[user]
        name = fabcre
        email = mail@mail.fr
[push]
        default = simple
[pull]
        rebase = true
[color]
        ui = true
[alias]
  lo = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
  st = status
  df = diff
  co = checkout
  ci = commit
  br = branch
  stashpull = !git stash && git pull && git stash pop
  amend = commit --amend --no-edit
  undo = git reset --mixed HEAD^
  addu = add -u # stages modified & deleted ("git add ." stages new & modified)
  adda = add -A # stages ALL`;

export const advancedConfig = `[user]
  name = Your Full Name
  email = your@email.tld
[color]
  # Enable colors in color-supporting terminals
  ui = auto
[alias]
  st = status
  ci = commit
  lg = log --graph --date=relative --pretty=tformat:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%an %ad)%Creset'
  oops = commit --amend --no-edit
  review-local = "!git lg @{push}.."
  # Or pre 2.5, as we didn't differential push and upstream in shorthands:
  # review-local = lg @{upstream}..
[core]
  # Don't paginate output by default
  pager = cat
  #
  # Out of luck: on Windows w/o msysGit? You may have Notepad++…
  # editor = 'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin
  #
  # If you want to use Sublime Text 2's subl wrapper:
  # editor = subl -w
  #
  # Or Atom, perhaps:
  # editor = atom --wait
  #
  # Sublime Text 2 on Windows:
  # editor = 'c:/Program Files (x86)/Sublime Text 2/sublime_text.exe' -w
  #
  # Sublime Text 3 on Windows:
  # editor = 'c:/Program Files/Sublime Text 3/subl.exe' -w
  #
  # Don't consider trailing space change as a cause for merge conflicts
  whitespace = -trailing-space
[diff]
  # Use better, descriptive initials (c, i, w) instead of a/b.
  mnemonicPrefix = true
  # Show renames/moves as such
  renames = true
  # When using --word-diff, assume --word-diff-regex=.
  wordRegex = .
  # Display submodule-related information (commit listings)
  submodule = log
[fetch]
  # Auto-fetch submodule changes (sadly, won't auto-update)
  recurseSubmodules = on-demand
[grep]
  # Consider most regexes to be ERE
  extendedRegexp = true
[log]
  # Use abbrev SHAs whenever possible/relevant instead of full 40 chars
  abbrevCommit = true
  # Automatically --follow when given a single path
  follow = true
[merge]
  # Display common-ancestor blocks in conflict hunks
  conflictStyle = diff3
[mergetool]
  # Clean up backup files created by merge tools on tool exit
  keepBackup = false
  # Clean up temp files created by merge tools on tool exit
  keepTemporaries = false
  # Put the temp files in a dedicated dir anyway
  writeToTemp = true
  # Auto-accept file prompts when launching merge tools
  prompt = false
[pull]
  # This is GREAT… when you know what you're doing and are careful
  # not to pull --no-rebase over a local line containing a true merge.
  # rebase = true
[push]
  # Default push should only push the current branch to its push target, regardless of its remote name
  default = upstream
  # When pushing, also push tags whose commit-ishs are now reachable upstream
  followTags = true
[rerere]
  # If, like me, you like rerere, uncomment these
  # autoupdate = true
  # enabled = true
[status]
  # Display submodule rev change summaries in status
  submoduleSummary = true
  # Recursively traverse untracked directories to display all contents
  showUntrackedFiles = all
[color "branch"]
  # Blue on black is hard to read in git branch -vv: use cyan instead
  upstream = cyan
[tag]
  # Sort tags as version numbers whenever applicable, so 1.10.2 is AFTER 1.2.0.
  sort = version:refname
[versionsort]
  prereleaseSuffix = -pre
  prereleaseSuffix = .pre
  prereleaseSuffix = -beta
  prereleaseSuffix = .beta
  prereleaseSuffix = -rc
  prereleaseSuffix = .rc`;
