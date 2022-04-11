import { Button, Space } from "@douyinfe/semi-ui";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useRecoilState } from "recoil";
import { resumeState } from "../../store/store";



export default function Markdown () {

    const [content, setContent] = useRecoilState(resumeState)


    const btn = [
        { key: 'Contact', value: '联系方式' },
        { key: 'PersonalInformation', value: '个人信息' },
        { key: 'Demonstration', value: '经历证明' },
        { key: 'AbilityCertificate', value: '能力证明' },
        { key: 'SkillList', value: '技能清单' },
        { key: 'ExpressThanks', value: '致谢' }
    ]

    const handleClick = value => {
        const res = content + getContent(value)
        setContent(res)

    }

    const editorChange = value => {
        setContent(value)
    }

    return <div>
        <Space>
            {btn.map(item => (
                <Button
                    theme='solid'
                    onClick={() => handleClick(item.key)}
                    type='primary'
                    key={item.key}
                >{item.value}</Button>
            ))}
        </Space>
        <div>
            <MarkdownEditor onChange={value => editorChange(value)} />
        </div>
    </div>
}


function getContent (value) {
    const resumeContent = {
        Contact: `
       
# 联系方式

（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135.... （如果是外地手机，可注明。如经常关机，要写上最优联系时间）
- Email：goodman@gmail.com （虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G，非要用的话，不要用数字邮箱名）
- QQ/微信号：6...（提供一个通过网络可以联系到你的方式）

        `,
        PersonalInformation: `
        
# 个人信息

 - 姓名/男/1990 
 - 本科/北京大学计算机系 
 - 工作年限：3年
 - 技术博客：http://localhost ( 使用GitHub Host的Big较高  )
 - Github：http://github.com ( 有原创repo的Github帐号会极大的提升你的个人品牌  )

 - 期望职位：PHP高级程序员，应用架构师
 - 期望薪资：税前月薪15k~20k，特别喜欢的公司可例外
 - 期望城市：北京

        `,
        Demonstration: `

# 工作经历
（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）

## ABC公司 （ 2012年9月 ~ 2014年9月 ）

### DEF项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### GHI项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

  
## JKL公司 （ 2010年3月 ~ 2012年8月 ）

### MNO项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### PQR项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）
  
  
        `,
        AbilityCertificate: `
        
# 开源项目和作品
（这一段用于放置工作以外的、可证明你的能力的材料）

## 开源项目
（对于程序员来讲，没有什么比Show me the code能有说服力了）

  - [项目名](http://github.com)：项目的简要说明，Star和Fork数多的可以注明
  - [项目名](http://github.com)：项目的简要说明，Star和Fork数多的可以注明

## 技术文章
（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）

- [文章标题](http://github.com)
- [文章标题(翻译文章)](http://github.com) （ 好的翻译文章可以侧证你对英文技术文档的阅读能力）

## 演讲和讲义
（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）

  - 2022XX大会演讲：[演讲标题](http://github.com)
    
    
        `,
        SkillList: `
        
# 技能清单
（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）

以下均为我熟练使用的技能

- Web开发：PHP/Hack/Node
- Web框架：ThinkPHP/Yaf/Yii/Lavarel/LazyPHP
- 前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic
- 前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap
- 数据库相关：MySQL/PgSQL/PDO/SQLite
- 版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer
- 单元测试：PHPUnit/SimpleTest/Qunit
- 云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发
      
        `,
        ExpressThanks: `
              
---      
# 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事。
      
        `,

    }

    return resumeContent[value]
}
