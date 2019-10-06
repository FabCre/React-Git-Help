const mergeSteps: string[] = [
  'git checkout master',
  'git pull',
  'git checkout branchToMerge',
  'git reabse origin/master',
  'git commit --amend OR git rebase -i si plsu d\'un commit afin de refaire un historique propre',
  'git push --force-with-lease',
  'git checkout master',
  'git merge branchToMerge',
  'git log -4',
  'git push'
];

export default mergeSteps;
