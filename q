[0;1;32m●[0m postgresql.service - PostgreSQL database server
     Loaded: loaded (/usr/lib/systemd/system/postgresql.service; disabled; vendor preset: disabled)
     Active: [0;1;32mactive (running)[0m since Sun 2020-08-09 13:09:20 MSK; 2h 55min ago
    Process: 149268 ExecStartPre=/usr/bin/postgresql-check-db-dir ${PGROOT}/data (code=exited, status=0/SUCCESS)
   Main PID: 149270 (postgres)
      Tasks: 7 (limit: 9346)
     Memory: 17.5M
     CGroup: /system.slice/postgresql.service
             ├─149270 /usr/bin/postgres -D /var/lib/postgres/data
             ├─149272 postgres: checkpointer
             ├─149273 postgres: background writer
             ├─149274 postgres: walwriter
             ├─149275 postgres: autovacuum launcher
             ├─149276 postgres: stats collector
             └─149277 postgres: logical replication launcher

авг 09 13:09:20 monk systemd[1]: Starting PostgreSQL database server...
авг 09 13:09:20 monk postgres[149270]: 2020-08-09 13:09:20.927 MSK [149270] СООБЩЕНИЕ:  запускается PostgreSQL 12.3 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 10.1.0, 64-bit
авг 09 13:09:20 monk postgres[149270]: 2020-08-09 13:09:20.928 MSK [149270] СООБЩЕНИЕ:  для приёма подключений по адресу IPv6 "::1" открыт порт 5432
авг 09 13:09:20 monk postgres[149270]: 2020-08-09 13:09:20.928 MSK [149270] СООБЩЕНИЕ:  для приёма подключений по адресу IPv4 "127.0.0.1" открыт порт 5432
авг 09 13:09:20 monk postgres[149270]: 2020-08-09 13:09:20.929 MSK [149270] СООБЩЕНИЕ:  для приёма подключений открыт Unix-сокет "/run/postgresql/.s.PGSQL.5432"
авг 09 13:09:20 monk postgres[149271]: 2020-08-09 13:09:20.950 MSK [149271] СООБЩЕНИЕ:  система БД была выключена: 2020-08-08 16:45:57 MSK
авг 09 13:09:20 monk postgres[149270]: 2020-08-09 13:09:20.954 MSK [149270] СООБЩЕНИЕ:  система БД готова принимать подключения
авг 09 13:09:20 monk systemd[1]: Started PostgreSQL database server.
авг 09 13:18:00 monk postgres[152275]: 2020-08-09 13:18:00.429 MSK [152275] ОШИБКА:  база данных "postgresdb" уже существует
авг 09 13:18:00 monk postgres[152275]: 2020-08-09 13:18:00.429 MSK [152275] ОПЕРАТОР:  create database postgresdb;
