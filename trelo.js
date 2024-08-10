document.addEventListener('DOMContentLoaded', function () {
    const fullCalendarElement = document.querySelector('full-calendar');

    // Définir les événements dynamiques
    fullCalendarElement.options = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      initialView: 'dayGridMonth',
      events: [
        {
          title: 'Réunion d\'équipe',
          start: '2024-08-05T10:00:00',
          end: '2024-08-07T11:00:00'
        },
        {
          title: 'Présentation du projet',
          start: '2024-08-10',
        },
        {
          title: 'Atelier de formation',
          start: '2024-08-15T14:00:00',
          end: '2024-08-15T16:00:00'
        }
      ]
    };
  });


  // fonction pour kaban

  
  document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour ajouter une nouvelle tâche
    const addTask = (columnId) => {
      const column = document.getElementById(columnId);
      const newItem = document.createElement('div');
      newItem.className = 'kanban-item';
      newItem.innerHTML = `
        <input type="text" value="" placeholder="Nouvelle tâche">
        <div class="kanban-item-tache">
          <button class="edit-task">Modifier la tache</button>
          <button class="move-task">Deplacer la tache</button>
          <button class="add-task">Ajouter une tache</button>
        </div>
      `;
      column.appendChild(newItem);
    };
  
    // Fonction pour déplacer une tâche
    const moveTask = (taskElement) => {
      const currentColumn = taskElement.closest('.kanban-column');
      let nextColumnId;
      
      if (currentColumn.id === 'todo') {
        nextColumnId = 'in-progress';
      } else if (currentColumn.id === 'in-progress') {
        nextColumnId = 'done';
      } else {
        nextColumnId = 'todo';
      }
      
      const nextColumn = document.getElementById(nextColumnId);
      nextColumn.appendChild(taskElement);
    };
  
    // Écouteurs d'événements pour les boutons
    document.querySelectorAll('.kanban-column').forEach(column => {
      column.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target.classList.contains('add-task')) {
          const columnId = column.id;
          addTask(columnId);
        } else if (target.classList.contains('move-task')) {
          const taskElement = target.closest('.kanban-item');
          moveTask(taskElement);
        } else if (target.classList.contains('edit-task')) {
          const taskElement = target.closest('.kanban-item');
          const input = taskElement.querySelector('input');
          input.focus();
        }
      });
    });
  });
  