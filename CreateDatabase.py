from py2neo import Graph, Node, Relationship, NodeMatcher
import pandas as pd

class CreateDatabase:
    def __init__(self,del_index=True):
        self.df = pd.read_excel('static\\route.xlsx', header=[0, 1, 2])
        """
        first row: label name
        second row: level of node
        third row: boolean value indication
        """
        # 连接到Neo4j数据库

        # if del_index == False:
        #         graph.delete_all()
        # else:
        #     print("不清空节点")

        self.pre_dict = {}
        self.pre_dict_reverse = {}
        self.created_node = {}
        self.df_label_new = pd.read_excel('static\\cases.xlsx', header=[0])
        self.labels_new = []  #第一行，标题
        self.node2level = {} #节点名称：级数

        for n in self.df_label_new:
            if "Unnamed" not in str(n):
                self.labels_new.append(n) #cases的标题

    def create_node(self,graph,label,name,num=0): #创建节点
        #print("节点级数：",self.node2level[label])
        truelabel=label
        try:
            truelabel=truelabel.replace(" ","_")
        except:
            print(truelabel)
        label=label.split("_")[0]
        matcher = NodeMatcher(graph)

        node = matcher.match(label, name=name,TrueLabel=truelabel).first()

        # 如果节点存在，则node不为None
        if str(label)+str(name)+str(truelabel) not in self.created_node and not node:
            self.created_node[str(label)+str(name)+str(truelabel)]=num #num没有意义
            node = Node(label, name=name,TrueLabel=truelabel)
            graph.create(node)
        else:
            pass
            #print(str(label)+str(name)+str(truelabel),"节点已经存在")


        node=graph.nodes.match(label, name=name,TrueLabel=truelabel).first()
        if "value" in truelabel or "MotherLabel" in truelabel:
            redundancy=True
        else:
            redundancy=False
        node.update({'redundancy': redundancy})
        #print({'TrueLabel':truelabel})
        graph.push(node)
    def create_relationship(self,graph,start_node,relation,end_node): #连接节点
        graph.create(Relationship(start_node, relation, end_node))
    def create_node_dict(self,graph,list_,num): #创建节点字典，["label"]=value

        for nodes in list_:
                #self.create_node(graph, str(nodes[1])+str(num), nodes[0])
                #print(str(nodes[1])+str(num),"nodes_label",nodes[0],"nodes_name")
                self.pre_dict[str(nodes[1])+str(num)]=nodes[0]
                self.pre_dict_reverse[nodes[0]]=str(nodes[1])+str(num)

    def relation_with_truelabel(self,graph,truelabel_start,start_node,truelabel_end,end_node,num,label_=None):

        num=str(num)
        if label_ == None:
            relation = "have"
        else:
            relation = label_
        start_node_label=truelabel_start.split("_")[0]
        end_node_label=truelabel_end.split("_")[0]

        truelabel_start=truelabel_start.replace(" ","_")
        truelabel_end=truelabel_end.replace(" ","_")
        #print(start_node_label,"____________________",start_node,"____________________",end_node_label,"____________________",end_node,"____________________")
        start_node = graph.nodes.match(start_node_label, TrueLabel=truelabel_start, name=start_node).first()

        # 查询终止节点
        end_node = graph.nodes.match(end_node_label, TrueLabel=truelabel_end, name=end_node).first()
        # 创建关系
        relationship = Relationship(start_node, relation, end_node)
        graph.create(relationship)
        # 创建关系
        relationship = Relationship(end_node, "belong to", start_node)
        graph.create(relationship)
    def relation_with_label(self,graph,truelabel_start,truelabel_end): #按照标签连接节点


        start_node_label=truelabel_start.split("_")[0]
        start_node_name=truelabel_start.split("_")[1]
        end_node_label=truelabel_end.split("_")[0]
        end_node_name = truelabel_end.split("_")[1]

        #print(truelabel_start,truelabel_end)


        truelabel_start=truelabel_start.replace(" ","_")
        truelabel_end=truelabel_end.replace(" ","_")
        start_node = graph.nodes.match(start_node_label, TrueLabel=truelabel_start).first()

        # 查询终止节点

        end_node = graph.nodes.match(end_node_label, TrueLabel=truelabel_end).first()

        #print(start_node,end_node)
        # 创建关系
        relation=end_node_label
        try:
            relationship = Relationship(start_node, relation, end_node)
            graph.create(relationship)
        except:
            pass
            #print(truelabel_end,"该节点")

    def relation_with_name(self,graph,start_node_label,start_node,end_node_label,end_node,num,label_=None): #按照名称连接节点

        if start_node !="NaN" and end_node!="NaN":
            start_node_label=str(start_node_label)
            end_node_label=str(end_node_label)
            if label_==None:
                relation="have"
            else:
                relation = label_
            start_node_list = graph.nodes.match(start_node_label, name=start_node).all()
            end_node_list = graph.nodes.match(end_node_label, name=end_node).all()
            for start_node_ in start_node_list:
                for end_node_ in end_node_list:
                    rel = Relationship(start_node_, relation, end_node_)
                    graph.create(rel)
            relation = "belong to"
            start_node_list = graph.nodes.match(end_node_label, name=end_node).all()
            end_node_list = graph.nodes.match(start_node_label, name=start_node).all()
            for start_node_ in start_node_list:
                for end_node_ in end_node_list:
                    rel = Relationship(start_node_, relation, end_node_)
                    graph.create(rel)
        else:
            pass
            #print("Nan")reverse_index
    def read_col(self,col_num):
        for num_number in range(col_num):
            print("-------正在加载标签图谱%s-------" % num_number)
            df_col = pd.read_excel(document_name)
            label = self.df_label_new
            #new_number 是第几列
            # i 是第几行
            num ="_"+ str(num_number)
            # 使用 iloc() 方法读取第一列数据
            first_column = df_col.iloc[:, num_number]
            self.create_node(graph,"MotherLabel_"+self.labels_new[num_number],self.labels_new[num_number])
            for i in range(len(first_column)):
                #print("母标签：",self.labels_new[num_number],"子标签：",str(self.labels_new[num_number])+str("_")+str(i)+"  建立标签图谱...")
                self.relation_with_label(graph,"MotherLabel_"+self.labels_new[num_number],str(self.labels_new[num_number])+str("_")+str(i))
    def repeat_one(self,df2_dict):
            """

            :param df2: upload传回的字典的.values() list
            :return:
            """
        # for num_number in index_num:
        #     print("-------正在加载index：%s的数据-------"%num_number)
        #     num="_"+str(num_number)
        #     df2 = pd.read_excel(document_name, header=[num_number+1],dtype=object) #num_number+1行的数据

            num_number=df2_dict['Index']
            num = "_" + str(num_number)
            df2=list(df2_dict.values())
            # 第一行数据
            value_new = {} #节点名称：数值
            values = [] #存储该行每个单元格数据
            for n in df2:
                    # if "." in str(n):
                    #     if len(str(n).split(".")[0])==1 and str(n).split(".")[1].isdigit():  #处理pandas读数字出小数
                    #
                    #
                    #         value=str(n).split(".")[0]
                    #     elif len(str(n).split("."))==2 and str(n).split(".")[1].isdigit() and str(n).split(".")[0].isalpha():#分离uncertain重复
                    #         value=str(n).split(".")[0]
                    #     else:
                    #         value = n
                    # else:
                    value = n
                    values.append(value) #存储该行每个单元格数据


            for i in range(len(self.labels_new)):
                if "Unnamed" in str(values[i]):
                    if i > 15:  #如果boolean部分标签的数值有空值则默认为1
                        result_or_random = 1
                    else:       #如果非boolean部分标签的数值有空值则默认为标签名称
                        result_or_random=self.labels_new[i]
                else:
                    result_or_random = values[i]
                value_new[self.labels_new[i]] = result_or_random

            rows = []
              # 节点名称对应级数
            node_create_list = []
            node_dict={} #label：名称
            for n in self.df:  #route的标签
                if n[0] in value_new:  #如果route的标签在case中：
                    #如果是10，那么name就是第0行的label
                    #如果不是，那么name就是value_new[n[0]]  label的数值

                    #print("value_new[n[0]]", value_new[n[0]],len(str(value_new[n[0]])))
                    if len(str(value_new[n[0]]))>1 or n[0]=="Index":  #不是boolean
                        #print("标签数值：",value_new[n[0]])
                        title_name=value_new[n[0]]#label的值
                        label_name= n[0]
                    else:
                        title_name = n[0]
                        label_name=n[0]  #节点级数
                    bollean_value = value_new[n[0]]
                    #print(n[0], bollean_value, "bollean数值")
                else:
                    title_name = n[0]
                    label_name=n[0]
                    bollean_value = n[2]
                node_create_list.append([title_name, label_name, bollean_value])
                node_dict[title_name]=label_name
                rows.append([title_name, n[1], bollean_value])
                self.node2level[label_name+str(num)]=n[1]# 节点名称对应级数
            #print(node_dict,"node_dict","__________")
            #print("excel每个节点属性：", rows)
            graph = Graph(uri="neo4j://localhost:7687",
                          user="neo4j",
                          password="12345678")
            self.create_node_dict(graph, node_create_list,num)

            chain_ = {}
            end_node2 = {}  # 测试用
            end_node = {}
            end_node_find = []
            remove_list = []
            level_list = []
            same_level_list = {}


            for n in range(len(rows)):
                # end_node2[rows[n][0]]=rows[n][1]  #测试终点判断
                level_list.append(int(rows[n][1])) #按顺序存储每个节点级数

                if len(level_list) > 1: #不是标题节点
                    if level_list[-1] == level_list[-2]:
                        same_level_list[rows[n][0]] = rows[n][1]  #为了使得在级数减小时把之前相同级数的终点都正确划分为终点
                        same_level_list[rows[n - 1][0]] = rows[n - 1][1]
                    if int(rows[n][1]) < level_list[-2] or n == len(rows) - 1:
                        end_node.update(same_level_list)
                        if rows[n - 1][0] not in same_level_list:
                            end_node[rows[n - 1][0]] = rows[n - 1][1]

                    if str(rows[n][2]) == str(0) and node_create_list[n][1]!="Index":
                        remove_list.append(rows[n][0])
                    if  str(rows[n][2]) == str(1) and node_create_list[n][1]!="Index":
                        self.create_node(graph, rows[n][0] + "_value1" + "_CaseIndex:" + str(num_number), rows[n][0]) #单独创建boolean数值节点

            # 遍历节点，找到没有找到过的节点后停止
            # 节点顺序是从小到大（如果大变小，则说明遇到了终点），所以结果字典键值也是从小到大
            # 后面发现更小的label后要覆盖前面的label
            for chains in range(len(end_node)):
                larger_node = {}
                chain_[chains] = {}
                for n in rows:
                    if n[0] not in end_node or n[0] in end_node_find:
                        chain_[chains][str(n[1])] = n[0]
                    else:
                        chain_[chains][str(n[1])] = n[0]
                        end_node_find.append(n[0])
                        max_key = max(chain_[chains].keys())  # max_key这条路最大的层级是多少，n[1]是这条路终点层级
                        # print(max_key,n[1])
                        if int(n[1]) < int(max_key):
                            for i in range(int(max_key) - int(n[1])):
                                # print(str(i+1+int(n[1])),"del")
                                del chain_[chains][str(i + 1 + int(n[1]))]  # 在每条路线中删除终点之后多余的节点
                        break

            #print("每条到终点路线", chain_)
            #print("终结点列表", end_node)
            #print("len(end_node)", len(end_node))
            #print("已经找到的终结点列表", end_node_find)
            #print(remove_list, "因为是0所以删除的元素列表", len(remove_list))
            for i in remove_list:
                self.create_node(graph,i+"_value0"+"_CaseIndex:"+str(num_number),i) #单独创建boolean数值节点
            remove_dict = []
            for element_dict in chain_:
                for item_ in remove_list:
                    if item_ in chain_[element_dict].values():
                        #print(element_dict, "因为是0所以删除的路线")

                        remove_dict.append(element_dict)
            established_relation = []  # 连接4参数，判断是否已经连接
            established_node = []
            for element_dict in chain_:
                if element_dict not in remove_dict:
                    for item_ in chain_[element_dict]: #遍历每条链路，连接上下级
                        if int(item_) != 1:
                            start_label = node_dict[chain_[element_dict][str(int(item_) - 1)]] + str(num)
                            start_name = chain_[element_dict][str(int(item_) - 1)]
                            end_label = node_dict[chain_[element_dict][(item_)]] + str(num)
                            end_name = chain_[element_dict][(item_)]
                            if [start_label, start_name, end_label,
                                                end_name] not in established_relation:
                                established_relation.append(
                                    [start_label, start_name, end_label,
                                     end_name])

                                #print("联系建立:",established_relation[-1])



                                established_node.append(start_label)
                                established_node.append(end_label)

                                self.create_node(graph,start_label,start_name,num_number)
                                self.create_node(graph,end_label,end_name,num_number)
                                self.relation_with_truelabel(graph, start_label, start_name, end_label,
                                     end_name,num)


            #print(established_node) #['AI Ethics Issues_0', 'Time attributes of AI ethical issues_0',...]
            if "AI Products"+"_"+str(num_number) not in established_node:
               # print("AI Products 不建立连接")
                pass
            else:
                #print("AI Products 建立连接")
                try:
                    self.relation_with_truelabel(graph, node_dict["AI's service & work sessions"]+str(num), "AI's service & work sessions", node_dict["AI Products"]+str(num),"AI Products" ,num)
                except:
                    pass
            try:
                matcher = NodeMatcher(graph)
                node = matcher.match("Case theme",TrueLabel="Case_theme"+"_"+str(num_number)).first()
                name=node['name']
                node = matcher.match("AI ethics issues",TrueLabel="AI_ethics_issues"+"_"+str(num_number)).first()
                node.update({'name': name})
                graph.push(node)
            except:
                pass

        #
        # if len(index_num)!=0:
        #     self.read_col(labels_number)
        #         #print(node_dict["AI's service & work sessions"]+str(num), "AI's service & work sessions", node_dict["AI Products"]+str(num),"AI Products" ,num, "建立连接")

if __name__ == '__main__':
#     import sys
#     args = sys.argv
#     #print("输入命令有：",args)
#     """
#     python CreateDatabase.py -update -d "cases.xlsx"
#     可选参数有：
#     -update excel：有新数据录入，更新数据库;
#     -d [文件名]：excel文件名称更换；默认名称为"cases.xlsx";
#     """
    graph = Graph(uri="neo4j://localhost:7687",
                  user="neo4j",
                  password="12345678")
#     cases_list = []
#     """
#     document_name：输入需要导入的excel文件名称；
#     labels_number：选择建立标签数据库的标签数量；
#     cases_list：选择建立数据库的案例列表；
#     """
    document_name = 'static\\cases.xlsx'
#     if "-update" in args:
#         print("-------开始更新-------")
#         matcher = NodeMatcher(graph)
#         update_index=True
#         index_list = pd.read_excel(document_name).iloc[:, 0]
#         for i in index_list:
#             node = matcher.match("Index", name=i).first()
#             if not node:
#                 cases_list.append(int(i))
#     else:
#         print("-------开始载入-------")
#         update_index=False
#         for i in range(len(pd.read_excel(document_name))):
#             cases_list.append(i)  # 新文件的index
#     if "-d" in args:
#
#         for i in args:
#             if "xlsx" in i:
#                 document_name=i
#                 print("-------文件更改%s-------"%document_name)
#     labels_number= int(pd.read_excel(document_name, header=0).iloc[0].count())
#     CreateDatabase().repeat_one(cases_list)
#     print("\n","图数据库建立完成！共输入案例 %s 例, 标签 %s 个，案例总数为%s "%(len(cases_list),labels_number,len(pd.read_excel(document_name).iloc[:, 0]-1)))
