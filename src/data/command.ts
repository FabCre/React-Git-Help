export interface Command {
  cmd: string;
  desc: string;
  exemple?: string;
}

type CommandTable = Command[];

const cmdTable: CommandTable = [
  {
    cmd: 'git init',
    desc:
      'Initialise un nouveau dépot sur la machine dans le dossier où la command est lancée.',
    exemple:
      "Nouveau projet Git local à partir d'un dossier local. Si on veut ensuite le partager sur GitHub, il faudra alors paramétrer le remote",
  },
  {
    cmd: 'git clone [dépot a cloner]',
    desc:
      'Clone un dépot sur la machine dans le dossier où la command est lancée.',
    exemple:
      'Attention à la confgiuration de git: clé ssh et droit sur le dépot distant.',
  },
  {
    cmd: 'git status',
    desc:
      "Récapitule l'état local (workspace et index) des fichiers (par rapport au repo récupéré).",
    exemple:
      "En rouge : modifié mais non pris en compte (= en workspace), en vert : modifié et pris en compte (= ajouté à l'index).",
  },
  {
    cmd: 'git --help [command]',
    desc: 'Renvoi au manuel de la commande.',
    exemple: 'On peut préciser une commande particulière "git --help branch"',
  },
  {
    cmd: 'git [command] -help',
    desc: 'Renvoi la liste des commandes disponibles.',
    exemple: 'On peut préciser une commande particulière "git branch -help"',
  },
  {
    cmd: 'git remote add origin [adresse du remote]',
    desc: 'Créé et ajoute une nouvelle remote "origin" à l\'adresse indiqué.',
    exemple: 'git remote add origin git@github.com:FabCre/test.github',
  },
  {
    cmd: 'git push -u origin master',
    desc:
      'Le flag -u permet de sauvegarder les paramêtres dans le .git pour les prochains push.',
  },
  {
    cmd: 'git remote -v',
    desc: 'Affiche les remotes.',
  },
  {
    cmd: 'git log',
    desc: "Voir l'historique des commits.",
    exemple: 'git log -7 permet de voir les 7 dernier commits',
  },
  {
    cmd: 'git show',
    desc: "Voir l'intégralité du commit dans le terminal.",
    exemple: 'git show + 7 premiers caractères du hash du commit',
  },
  {
    cmd: 'git diff',
    desc: 'Affiche les modifications depuis le dernier commit dans le local.',
    exemple:
      'Pn peut ajouter le flag -w pour faire le diff sans les whitespace, indentations...',
  },
  {
    cmd: 'git commit --amend',
    desc:
      'Permet de modifier sur le titre et/ou la description du dernier commit en local.',
  },
  {
    cmd: 'git branch [nom de la branche]',
    desc: 'Crée une nouvelle branche à partir de la branche et commit courant.',
  },
  {
    cmd: 'git checkout [nom de la branche]',
    desc: 'Permet de se rendre sur la branche nommée.',
  },
  {
    cmd: 'git merge [nom de la branche]',
    desc:
      'Effectue un merge sur la branche principale, nécessite de résoudre les conflits.',
  },
  {
    cmd: 'git branch -d [nom de la branche]',
    desc: 'Supprime la branch sur le local.',
    exemple:
      'On peut ajouter le flag -f pour supprimer la branche avec des changements non mergés.',
  },
  {
    cmd: 'git push origin --delete [nom de la branche]',
    desc: 'Supprime la branch distante.',
  },
  {
    cmd: 'git stash',
    desc:
      'Met en brouillon les dernières modifications depuis le dernier commit dans le local.',
  },
  {
    cmd: 'git stash pop',
    desc: 'Reprend ce qui à été ajouté en brouillon.',
  },
  {
    cmd: 'git stash apply',
    desc:
      'Applique ce qui à été ajouté en brouillon sans le supprimer du brouillon.',
  },
  {
    cmd: 'git stash list',
    desc: 'Affiche la liste des brouillons présent sur le local.',
  },
  {
    cmd: 'git stash drop stash@{[identifiant du stash]}',
    desc: 'Supprime le stash identifier',
    exemple: 'git stash drop stash@{0}',
  },
  {
    cmd: 'git push',
    desc:
      "Envoi les commits vers le repo distant, on peut identifier explicitement l'adresse de l'envoi.",
    exemple: 'git push origin/master',
  },
  {
    cmd: 'git pull',
    desc:
      "Recupère les derniers commits, le git pull effectue par défaut un fetch puis un merge, il est préférable d'utiliser le flag --rebase afin de placer son travail en tête de branche",
    exemple: 'git pull adresse.git',
  },
  {
    cmd: 'git add [fichier a ajouter dans le commit]',
    desc:
      'Ajoute le fichier nommée, mettre un espace entre chaque fichier à ajouter au comit. En utilisant le git add . tout est ajouté dans le commit.',
  },
  {
    cmd: 'git add -p',
    desc:
      'Permet d\'effectuer une review des dernières modifications et n\'ajouter que ce qui est nécessaire au présent commit. Attention, les fichiers "untracked" ne seront pas reviewés.',
  },
  {
    cmd: 'git reset HEAD .',
    desc: 'Permet de supprimer les fichiers et/ou dossiers ajouter par erreur.',
  },
  {
    cmd: 'git commit',
    desc:
      "Ouvre l'éditeur de texte et permet de taper un titre de commit suivi d'un message. Attention, le titre et le message doivent être séparé par une ligne vide.",
  },
  {
    cmd: 'git commit -m [titre du commit]',
    desc:
      'Commande de raccourci pour effectuer un commit mais ne permet pas de laisser de message de commit.',
  },
  {
    cmd: 'git rebase [nom de la branche]',
    desc: 'Applique les commits au dessus des autres commits.',
    exemple: 'Se référer au rebase process.',
  },
  {
    cmd: 'git rebase --interactive',
    desc:
      'Permet de reword, fixup, saquash ou autre sur les commits qui ne sont pas encore push sur le remote.',
  },
  {
    cmd: 'git fetch --prune',
    desc:
      'Permet de synchroniser la branche et les commits entre le local et le remote.',
  },
  {
    cmd: 'git fetch --all',
    desc:
      'Permet de synchroniser toutes les branches et les commits entre le local et le remote.',
  },
  {
    cmd: 'git fetch',
    desc: 'Permet de synchroniser le local et le remote.',
  },
  {
    cmd: 'git cherry-pick [hash du commit]',
    desc:
      "Permet d'effectuer un rebase interactive avec un seul commit d'une autre branche.",
  },
  {
    cmd: 'git revert [hash du commit]',
    desc: "Permet de créer un commit de revert afin d'annuler son contenu.",
  },
];

export default cmdTable;
