const {
    simulateAsyncTask,
    simulateMultipleTasks,
    fetchDataWithCallback,
} = require('./asyncTasks');

// Use Jest's fake timers to control setTimeout
jest.useFakeTimers();
jest.spyOn(global.console, 'log').mockImplementation(() => { }); // silence console logs

describe('simulateAsyncTask', () => {
    test('logs Task started immediately and Task finished after 2s', () => {
        simulateAsyncTask();

        // Task started logged right away
        expect(console.log).toHaveBeenCalledWith('Task started');

        // Fast-forward time
        jest.advanceTimersByTime(2000);
        expect(console.log).toHaveBeenCalledWith('Task finished');
    });
});

describe('simulateMultipleTasks', () => {
    test('logs tasks in correct order with proper delays', () => {
        simulateMultipleTasks();

        // After 1s -> Task 1
        jest.advanceTimersByTime(1000);
        expect(console.log).toHaveBeenCalledWith('Task 1 finished');

        // After 2s -> Task 2
        jest.advanceTimersByTime(1000);
        expect(console.log).toHaveBeenCalledWith('Task 2 finished');

        // After 3s -> Task 3
        jest.advanceTimersByTime(1000);
        expect(console.log).toHaveBeenCalledWith('Task 3 finished');
    });
});

describe('fetchDataWithCallback', () => {
    test('invokes callback with fetched data after 2s', () => {
        const mockCallback = jest.fn();
        fetchDataWithCallback(mockCallback);

        // Fast-forward 2s
        jest.advanceTimersByTime(2000);
        expect(mockCallback).toHaveBeenCalledWith('Fetched data');
    });
});
