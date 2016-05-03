#Git使用技巧

##Git 工作原理
*	分布式
*	与SVN的区别

>Git与你熟悉的大部分版本控制系统的差别是很大的。也许你熟悉Subversion、CVS、Perforce、Mercurial 等等，他们使用 “增量文件系统” （Delta Storage systems）, 就是说它们存储每次提交(commit)之间的差异。Git正好与之相反，它会把你的每次提交的文件的全部内容（snapshot）都会记录下来。这会是在使用Git时的一个很重要的理念。


##Git flow 工作流
*	[工作流指南](http://blog.jobbole.com/76867/)

	![git flow工作流](http://7xix26.com1.z0.glb.clouddn.com/git-flow.png)

##Git 常用命令
>简而言之，使用 git add 添加需要追踪的新文件和待提交的更改， 然后使用 git status 和 git diff 查看有何改动， 最后用 git commit 将你的快照记录。这就是你要用的基本流程，绝大部分时候都是这样的。

*	基本命令

	*	git init 
	
		创建一个 Git 仓库
	
	*	git clone [url]
	
	*	git pull <BranchName>
	
	* 	git push <BranchName>
	
	*	git add .
	
	*	git rm --cached <files>
		
		撤销追加变换的文件
		
	*	git reset .
	
		撤销所有追加变化的文件
		
	*	git commit -m 'message'
	*	git checkout [BranchName]
	
		切换到分支BranchName
	*	git checkout -b [BranchName]
		
		基于当前创建新的分支并切换到BranchName
	*	git branch -d [BranchName]
	
		删除分支
			
	*	git log
	
		查看log
	
	*	git diff <cid1> <cid2>
	
		比较2各分支的差异
		
	*	git branch -ra
		
		查看远程跟本地所有分支
	
		
*	版本回退
	*	git log
	*	回退到上一版本
	
		git reset --hard HEAD^

*	撤销
	*	未commit
	
		git checkout [file]			
		
	*	已经commit
	
		git reset HEAD file
		
*	冲突解决
	
	*	合并分支
		
		git merge [BranchName]
		
		把BranchName 合并到当前分支
	*		
	
*	设置忽略
	
	修改`.gitignore`文件
	
*	stash(栈)

	*	git stash
		
		备份当前的工作区的内容
	*	git stash pop
	
		从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。	
	*	git stash clear
		清空git栈

`技巧`

*	删除远端分支
	*	git remote rm [remote-name]		

	*	git push [remote_repo] :[remote_branch] (注意远程分支前有个":")


##扩展
*	[子模块](http://gitbook.liuhui998.com/6_2.html)






###参考资料
*	[Git参考手册](http://www.yuanxj.net/tool/git.html)
*	[Git教程 - 廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
*	[使用 git rebase 避免無謂的 merge](https://ihower.tw/blog/archives/3843)
*	[Git Community Book 中文版](http://gitbook.liuhui998.com/)
*	[git-flow 备忘清单](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)