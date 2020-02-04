const hotfixSteps: string[] = [
  'checkout sur le commit de prod',
  'créer une branche à partir de la derniere version en prod, nom de la branche sous cette forme hotfix/letrucfixé',
  'commit',
  'via le système de déploiement (deployit) déployer la branhce en uat puis vérifier avant la mise en prod',
  'via deploy it mettre en prod cette nouvelle branche comprennant la prod actuelle plus le commit de fix',
  'a la suite du hotfix, mettre le commit sur la branche master en faisant un cherry pick depuis master du hotfix pour avoir la branche master a jour avec ce hotfix inclus',
];

export default hotfixSteps;

export function getHotfixStepContent(step: number): string {
  switch (step) {
    case 0:
      return 'checkout sur le commit de prod';
    default:
      return 'Etape inconnue';
  }
}
