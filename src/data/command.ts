export interface Command {
  cmd: string;
  desc: string;
  exemple?: string;
}

const cmdTable: Command[] = [
  {
    cmd: 'git init',
    desc:
      'initialise un nouveau dépot sur la machine dans le dossier où la command est lancée.',
    exemple:
      "nouveau projet Git local à partir d'un dossier local. Si on veut ensuite le partager sur GitHub, il faudra alors paramétrer le remote",
  },
  {
    cmd: 'git clone [depotACloner]',
    desc:
      'clone un dépot sur la machine dans le dossier où la command est lancée.',
    exemple:
      'attention à la confgiuration de git: clé ssh et droit sur le dépot distant.',
  },
  {
    cmd: 'git status',
    desc:
      "récapitule l'état local (workspace et index) des fichiers (par rapport au repo récupéré).",
    exemple:
      "En rouge : modifié mais non pris en compte (= en workspace), en vert : modifié et pris en compte (= ajouté à l'index).",
  },
  {
    cmd: 'git --help [command]',
    desc: 'renvoi au manuel de la commande.',
    exemple: 'on peut préciser une commande particulière "git --help branch"',
  },
  {
    cmd: 'git [command] -help',
    desc: 'renvoi la liste des commandes disponibles.',
    exemple: 'on peut préciser une commande particulière "git branch -help"',
  },
  {
    cmd: 'git remote add origin [adresseDuRemote]',
    desc: 'créé et ajoute une nouvelle remote "origin" à l\'adresse indiqué.',
    exemple: 'git remote add origin git@github.com:FabCre/test.github',
  },
  {
    cmd: 'git push -u origin master',
    desc:
      'le flag -u permet de sauvegarder les paramêtres dans le .git pour les prochains push.',
  },
  {
    cmd: 'git remote -v',
    desc: 'affiche les remotes.',
  },
  {
    cmd: 'git log',
    desc: "voir l'historique des commits.",
  },
  {
    cmd: 'git show',
    desc: "voir l'intégralité du commit dans le terminal.",
    exemple: 'git show + 7 premiers caractères du hash du commit',
  },
  {
    cmd: 'git diff',
    desc: 'affiche les modifications depuis le dernier commit dans le local.',
    exemple:
      'on peut ajouter le flag -w pour faire le diff sans les whitespace, indentations...',
  },
  {
    cmd: 'git commit --amend',
    desc:
      'permet de modifier sur le titre et/ou la description du dernier commit en local.',
  },
  {
    cmd: 'git branch [nomDeLaBranche]',
    desc: 'crée une nouvelle branche à partir de la branche HEAD.',
  },
  {
    cmd: 'git checkout [nomDeLaBranche]',
    desc: 'permet de se rendre sur la branche nommée.',
  },
  {
    cmd: 'git merge [nomDeLaBranche]',
    desc:
      'effectue un merge sur la branche principale, nécessite de résoudre les conflits.',
  },
  {
    cmd: 'git branch -d [nomDeLaBranche]',
    desc: 'supprime la branch sur le local.',
    exemple:
      'on peut ajouter le flag -f pour supprimer la branche avec des changements non mergés.',
  },
  {
    cmd: 'git push origin --delete [nomDeLaBranche]',
    desc: 'supprime la branch distante.',
  },
  {
    cmd: 'git stash',
    desc:
      'met en brouillon les dernières modifications depuis le dernier commit dans le local.',
  },
  {
    cmd: 'git stash pop',
    desc: 'reprend ce qui à été ajouté en brouillon.',
  },
  {
    cmd: 'git stash list',
    desc: 'affiche la liste des brouillons présent sur le local.',
  },
  {
    cmd: 'git stash drop stash@{[identifiantDuStash]}',
    desc: 'supprime le stash identifier',
    exemple: 'git stash drop stash@{0}',
  },
  {
    cmd: 'git push',
    desc:
      "envoi les commits vers le repo distant, on peut identifier explicitement l'adresse de l'envoi.",
    exemple: 'git push origin/master',
  },
  {
    cmd: 'git pull',
    desc:
      "recupère les derniers commits, le git pull effectue par défaut un fetch puis un merge, il est préférable d'utiliser le flag --rebase afin de mettre son travail en tête de branche",
    exemple: 'git pull adresse.git',
  },
  {
    cmd: 'git add [fichierAAjouterdDansLeCommit]',
    desc:
      'ajoute le fichier nommée, mettre un espace entre chaque fichier à ajouter au comit. En utilisant le git add . tout est ajouté dans le commit.',
  },
  {
    cmd: 'git add -p',
    desc:
      'permet d\'effectuer une review des dernières modifications et n\'ajouter que ce qui est nécessaire au présent commit. Attention, les fichiers "untracked" ne seront pas reviewés.',
  },
  {
    cmd: 'git reset HEAD .',
    desc: 'permet de supprimer les fichiers et/ou dossiers ajouter par erreur.',
  },
  {
    cmd: 'git commit',
    desc:
      "ouvre l'éditeur de texte et permet de taper un titre de commit suivi d'un message. Attention, le titre et le message doivent être séparé par une ligne vide.",
  },
  {
    cmd: 'git commit -m [Titre du commit]',
    desc:
      'commande de raccourci pour effectuer un commit mais ne permet pas de laisser de message de commit.',
  },
  {
    cmd: 'git rebase',
    desc: 'Applique les commits au dessus des autres commits.',
    exemple: 'se référer au rebase process.',
  },
  {
    cmd: 'git rebase --interactive',
    desc:
      'Permet de reword, fixup, saquash ou autre sur les commits qui ne sont pas encore push sur le remote.',
  },
];

export default cmdTable;
