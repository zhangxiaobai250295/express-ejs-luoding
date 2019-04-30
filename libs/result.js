// 规定消息返回格式
const result = {
    createResult: function (success, data) {
        return {
            success: success,
            data: data
        }
    }
};

module.exports = result;
