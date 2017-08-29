# Exercice conception d'une base des données relationnelle #

1. __Introduction__

Une société de transport aérien décide de repenser l'implantation de son système d'information, elle souhaite passer des   fichiers vers une approche BD relationnelle. Pour mener à bien cette opération, la direction informatique de l'entreprise adopte une démarche en deux phases : une première phase dédiée à la conception des données et des traitements, et une seconde phase consacrée à l'implantation des données et des traitements à l'aide du SGBD relationnel retenu.

2. __Description du système d'information__

Pour vous permettre de construire le schéma conceptuel de la base, nous donnons maintenant la description des informations à gérer au sein de l'entreprise de transport aérien.

L'objectif est d'assurer la gestion, d'une part des employés, des vols et des appareils, d'autre part des clients et des billets.

L'ensemble des employés se compose du personnel navigant et du personnel au sol. Parmi le personnel navigant, on distingue les pilotes et les membres d'équipage (hôtesses, stewart, ...).

Un employé est caractérisé par un numéro de sécurité sociale, un nom, un prénom, une adresse et un salaire. Un personnel navigant comptabilise un certain nombre d'heures de vol. Un pilote possède une licence définie par un numéro. Un membre d'équipage assure une certaine fonction (hôtesse, stewart, ...).

Un appareil est identifié de manière unique par un numéro d'immatriculation. Il possède un type (A320, B747, ...) et il offre une certaine capacité en nombre de passagers.

Chaque liaison desservie par au moins un vol de la compagnie est définie par une ville d'origine et une ville de destination; de plus, elle est identifiée par un numéro.

Un vol est identifié par un numéro de vol. Il est caractérisé par une période de validité définie par deux dates. Durant cette période, ce vol a des horaires fixes (heure départ et heure arrivée). Un vol dessert une liaison et une seule. Qui plus est, un appareil et un seul est associé à un vol donné.

Pour chaque vol enregistré, on suppose qu'il existe un départ tous les jours pendant la période de validité de ce vol. Un départ est défini par un numéro de vol et une date de départ. A un départ sont associés un ou deux pilotes et deux à quatre membres d'équipage. Un départ est également caractérisé par un nombre de places libres et un nombre de places occupées. Une place occupée est une place ayant donnée lieu à une réservation avec émission d'un billet.

Un passager est identifié par un numéro. Il possède un nom, un prénom, une adresse, une profession et une banque. Il effectue des réservations qui donnent lieu à l'émission de billets.

Un billet est repéré par un numéro. Il comporte une date d'émission et un prix. Un billet référence un départ et un seul. Pour simplifier, on suppose qu'un billet concerne un client et un seul.

Voilà, à l'aide de __Workbench ou sur papier__ modeliser le schéma rélationnel de cette BD et d'etablir les clefs( primaires ou uniques).

Coooool
