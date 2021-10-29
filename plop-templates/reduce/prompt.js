module.exports = {
    description: '生成redux中的reducer模板', //描述这个generate的作用
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'reducer名', // 在命令行中的问题
    }],
    actions: function(data){
        data.name=data.name.replace(data.name[0],data.name[0].toLowerCase());
        const actions =  [{
            type:'add',
            path:'src/reducers/{{name}}Reducer.js',
            templateFile:"plop-templates/reduce/index.hbs",
            data:{
                name:data.name
            }
        },{
            type:'add',
            path:'src/actions/{{name}}.js',
            templateFile:"plop-templates/reduce/action.hbs",
            data:{
                name:data.name
            }
        }]
        return actions;
    }
};