@echo off

REM Сохранение пути к корневой папке проекта в переменную
set "project_root=C:\Users\Alex\IdeaProjects\web-lab-2.1"
set "project_name=web-lab-2.1"

REM Сборка JavaScript кода
cd "%project_root%\src\main\javascript" && call npm run build

REM Выполнение команд Maven
cd "%project_root%" && call mvn clean install

REM Копирование WAR архива в директорию WildFly
cd "%project_root%" && call copy "target\%project_name%.war" "C:\Users\Alex\wildfly-30.0.0.Beta1\standalone\deployments"