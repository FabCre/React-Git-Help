const hotfixSteps: string[] = [
  'git checkout master',
  'git checkout [hashDuCommit]',
  'git checkout -b hotfix/leBugAFixer',
  'git commit',
  'Déployer en pré-production la branche hotfix et tester',
  'Déployer en production la branche hotfix et tester',
  'git cherry-pick [hashDuCommit]',
];

export default hotfixSteps;

export function getHotfixStepContent(step: number): string {
  switch (step) {
    case 0:
      return 'Se rendre sur la branche de production';
    case 1:
      return 'Se rendre sur le commit actuel de la production pour se mettre à un état équivalent';
    case 2:
      return 'Créer une branche à partir de la dernière version en prod, nom de la branche sous cette forme: [hotfix/leBugAFixer]';
    case 3:
      return 'Commiter le fix';
    case 4:
      return 'Via le système de déploiement déployer la branche en uat / pré-production puis vérifier avant la mise en production';
    case 5:
      return 'Via le système de déploiement, effectuer une mise en production de cette nouvelle branche comprennant la production actuelle plus le commit de fix';
    case 6:
      return 'Depuis la branche master, cherry pick du hotfix pour avoir la branche master à jour avec le hotfix inclus';
    default:
      return 'Etape inconnue';
  }
}
