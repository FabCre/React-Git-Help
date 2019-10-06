const rebaseSteps: string[] = [
  "git checkout -b newbranch",
  "do the work on this branch",
  "commit on the current branch",
  "git checkout master",
  "git reset --hard origin/master seulement si du travail a été commencé sur master",
  "git merge --ff-only pour effectuer un merge en fast forward",
  "git rebase --interactive + les 4 premiers caractères du hash du commit",
  'dans le rebase "pick" le premier commit dans l\'ordre chronologique',
  '"fixup" les autres commits (idem que squash mais sans la modification du message)',
  "save, les changements doivent s'appliquer",
  "git log",
  "git push",
  "git branch -D nomdela/branch pour la delete avec force",
  "git branch pour vérifier la deletion",
  "git push --delete nomdela/branch pour supprimer la branch distante",
  "git pull",
  "git branch -vv"
];

export default rebaseSteps;
