export const transformPyrusProjects = async (pyrusData) => {
    if (!pyrusData || !pyrusData.tasks) {
        return [];
    }

    const transformedProjects = [];
    
    for (const task of pyrusData.tasks) {
        // Создаем объект для хранения полей по их коду
        const fieldsMap = {};
        
        task.fields.forEach(field => {
            fieldsMap[field.code] = field;
        });

        // Получаем значение поля "Айди" (Form Task Sequence)
        const id = fieldsMap['Form Task Sequence']?.value || task.id;
        
        // Получаем название проекта
        const name = fieldsMap['name']?.value || '';
        
        // Получаем описание
        const description = fieldsMap['deskription']?.value || '';
        
        // Получаем короткое описание
        const shortDescription = fieldsMap['short_deskription']?.value || null;
        
        // Получаем ссылку на сайт
        const site = fieldsMap['site']?.value || '';
        
        // Получаем важность проекта
        const importance = fieldsMap['importance']?.value || 0;
        
        // Получаем навыки (experience) из catalog поля
        let experience = [];
        const experienceField = fieldsMap['experience'];
        if (experienceField && experienceField.value && experienceField.value.rows) {
            experience = experienceField.value.rows.map(row => row[0]);
        }
        
        // Получаем категорию по id из form_link
        let category = [{
            id: 1,
            name: "Front-end",
            onHide: false
        }];
        
        const categoryField = fieldsMap['category'];
        if (categoryField && categoryField.value && categoryField.value.task_id) {
            try {
                const categoryData = await fetchPyrusCategoryById(categoryField.value.task_id);
                if (categoryData && categoryData.task) {
                    // Ищем поле с названием категории
                    const categoryNameField = categoryData.task.fields?.find(
                        field => field.code === 'name' || field.name === 'Наименование'
                    );
                    const categoryName = categoryNameField?.value || "Front-end";
                    
                    category = [{
                        id: categoryField.value.task_id,
                        name: categoryName,
                        onHide: false
                    }];
                }
            } catch (error) {
                console.error(`Ошибка при получении категории для проекта ${name}:`, error);
            }
        }

        transformedProjects.push({
            id: id,
            name: name,
            category: category,
            deskription: description,
            short_deskription: shortDescription,
            site: site,
            experience: experience,
            importance: importance
        });
    }
    
    return transformedProjects.sort((a, b) => a.id - b.id);
};