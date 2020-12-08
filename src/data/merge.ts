const mergeSteps: string[] = [
  'git checkout master',
  'git pull',
  'git checkout branchToMerge',
  'git rebase master',
  'git commit --amend OR git rebase -i',
  'git push --force-with-lease',
  'git checkout master',
  'git merge branchToMerge',
  'git log -4',
  'git push',
];

export default mergeSteps;

export function getMergeStepContent(step: number): string {
  switch (step) {
    case 0:
      return `Se rendre sur la branche master.`;
    case 1:
      return `Pull et s'assurer d'etre à jour avec la branche master.`;
    case 2:
      return `Se rendre sur la branche à merger.`;
    case 3:
      return `Effectuer un rebase de la branche master sur la branche à merger.`;
    case 4:
      return `Effectuer un amend sur le dernier commit ou bien un rebase interactive si il y a plus d'un commit afin de refaire un historique propre.`;
    case 5:
      return `Force pusher sur cette branche.`;
    case 6:
      return `Se rendre sur la branche master.`;
    case 7:
      return `Merger la branche avec master.`;
    case 8:
      return `Faire un log pour afficher et s'assurer du bon fonctionnement du merge.`;
    case 9:
      return `Push sur la branche master distante.`;
    default:
      return 'Etape inconnue';
  }
}
