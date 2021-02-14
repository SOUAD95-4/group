  
import random
import json 
import logging



def file():
    with open('students.txt', 'r' ) as f:
        list_names = f.readlines()
        list_names=list(map(lambda s: s.strip(), list_names)) 
        return list_names
        
       
        
def groups(nb_groups,list_names):
    
    n= int(len(list_names)/(nb_groups))

    for i in range (nb_groups):

        selected = random.sample(list_names,n)
        print("Group n°%s : %s" % (i,selected))
    
        for sel in selected:
            list_names.remove(sel)
groups(2,file())
