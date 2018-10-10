"use strict"; {
    angular.module('app')
        .controller('todoController', function () {
            const $ctrl = this;
            $ctrl.tasks = [{
                    item: 'Walk the dog',
                    output: true
                },
                {
                    item: 'Go to the store.',
                    output: false
                },
                {
                    item: 'Get gas.',
                    output: true
                },
                {
                    item: 'Wash the car.',
                    output: true
                }
            ];

            $ctrl.addTask = function(){
                $ctrl.tasks.push({item: $ctrl.newTask, output: true});
                $ctrl.newTask = "";
        
            }

            $ctrl.removeTask = function(index) {
                $ctrl.tasks.splice(index, 1);
            }

            $ctrl.completeTask = function(task){
                task.output = false;
            }
        });
}