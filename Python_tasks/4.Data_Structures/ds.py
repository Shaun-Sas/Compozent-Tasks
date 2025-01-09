students = {}

def create_student(name, age, grades):
    students[name] = {"Age": age, "Grades": grades}

def read_student(name):
    return students.get(name, "Student not found.")

def update_student(name, age=None, grades=None):
    if name in students:
        if age:
            students[name]["Age"] = age
        if grades:
            students[name]["Grades"] = grades
    else:
        return "Student not found."

def delete_student(name):
  
    if students.get(name) != None:
        students.pop(name)
        print(f"Student {name} is removed")
    else:
        print('Student not found!')


create_student("Shaunak", 22, [85, 90, 78])
create_student("Shaun", 22, [65, 92, 71])
create_student("Raj", 22, [92, 88, 79])
print(read_student("Raj"))
update_student("Shaunak", grades=[88, 92, 81])
delete_student("Bob")
delete_student("Shaun")
print(students)
