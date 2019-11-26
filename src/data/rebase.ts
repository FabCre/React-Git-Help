const rebaseSteps: string[] = [
  'git checkout -b newbranch',
  'git commit',
  'git checkout master',
  'git reset --hard origin/master',
  'git merge --ff-only [nomdela/branch]',
  'git rebase --interactive [les 4 premiers caractères du hash]',
  'git log',
  'git push',
  'git branch -D nomdela/branch',
  'git branch',
  'git push --delete nomdela/branch',
  'git pull',
  'git branch -vv',
];

export default rebaseSteps;

export function getRebaseStepContent(step: number): string {
  switch (step) {
    case 0:
      return `Depuis master afin de créer une nouvelle branche pour travailler.`;
    case 1:
      return `Effectuer ses commits sur cette branche.`;
    case 2:
      return `Se rendre sur la branche master.`;
    case 3:
      return `Attention, cette commande est à effectuer seulement si du travail a été commencé sur master.`;
    case 4:
      return `Effectuer un merge en fast forward`;
    case 5:
      return `Effectuer un rebase interactive depuis le commit, dans le rebase "pick" le premier commit dans l'ordre chronologique et "fixup" les autres commits (idem que squash mais sans la modification du message) puis save les changements.`;
    case 6:
      return `Effectuer un log afin de vérifier le bon déroulement avant de push.`;
    case 7:
      return `Effectuer un push.`;
    case 8:
      return `Supprimer la branche avec force.`;
    case 9:
      return `Vérifier la suppression de la branche.`;
    case 10:
      return `Supprimer la branche distante.`;
    case 11:
      return `Vérifier la situation en effectuant un pull.`;
    case 12:
      return `Permet de comparer les branches distantes et locales.`;
    default:
      return 'Unknown step';
  }
}
