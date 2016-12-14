## child_process文档阅读笔记

### 用于创建子进程的API：

说明：每一个子进程与子进程，每一个子进程与父进程之间都是独立的(除了它们之间建立的通信管道)，每一个进程有独立的内存空间，独立的V8实例，因为它们会额外占用资源，所以不建议创建大量子进程。

child_process.spawn()：异步创建子进程，在父进程和子进程之间建立一个管道用于传输stdin, stdout和stderr。


child_process.spawnSync()：同步步创建子进程，在父进程和子进程之间建立一个管道用于传输stdin, stdout和stderr。


child_process.exec()：会创建一个命令解析器，在命令解析器中运行命令，并将stdout和stderr传递给回调函数。


child_process.execSync()：child_process.exec()的同步版本，会阻塞Node.js的时间轮询。


child_process.execFile()：不会创建一个命令解析器，直接运行命令，更加轻量高效，并将stdout和stderr传递给回调函数。因为没有创建命令解释器，所以不支持I/O重定向等选项。


child_process.execFileSync()：child_process.execFile()的同步版本，会阻塞Node.js的时间轮询。


child_process.fork():直接创建一个nodejs进程来调用一个模块，在父进程与子进程直接建立一个IPC管道，用于父子进程之间的通信。


### 异步API：


包括：child_process.spawn(), child_process.fork(), child_process.exec(), and child_process.execFile().

这些API实现了Node.js的事件系统，可以在父进程上注册监听函数。

其中child_process.exec(), and child_process.execFile()额外增加了回调函数选项，回调函数将在子进程结束时调用。

child_process.exec(command[, options][, callback]),child_process.execFile(file[, args][, options][, callback])会返回一个ChildProcess实例。



child_process.fork(modulePath[, args][, options]),child_process.spawn(command[, args][, options])返回ChildProcess对象，会额外在父子进程之间建立管道用于通信。


